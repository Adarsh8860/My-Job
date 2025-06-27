const app = require('./App');
const { ConnectDB } = require('./db.config');
require('dotenv').config();
ConnectDB();

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server is running on the port ${port}`);
});

// 


