const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  skills: {
    type: [String],
    default: []
  },
  Company_name: {
    type: String,
    required: true,
    trim: true
  },
  Sallery: {
    type: String,
    trim: true
  },
  extended_date: {
    type: Date
  },
  job_url: {
    type: String,
    trim: true
  },
  Company_profile_pic: {
    type: String,
    trim: true
  },
  Job_type  : {
    type: String,
    enum: ['Full-Time', 'Part-Time', 'Internship', 'Contract', 'Remote', 'Other'],
    default: 'Full-Time'
  }
}, { timestamps: true });

module.exports = mongoose.model("Job", JobSchema);
