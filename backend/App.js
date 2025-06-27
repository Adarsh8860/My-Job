
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

// Middleware
app.use(express.json({}));
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(cors());
app.use('/api/v1', require('./Router'));

module.exports = app;

