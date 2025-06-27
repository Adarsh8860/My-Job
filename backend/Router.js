const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt'); // for secure password hashing
const JobModel = require('./JobsModel');
const Signupmodel = require('./Signupmodel');

// Create a new job
router.post('/create', async (req, res) => {
  try {
    console.log("Received data:", req.body);
    const job = await JobModel.create(req.body);
    console.log("Saved job:", job);
    res.status(201).json({ success: true, msg: "Job creation successful", data: job });
  } catch (error) {
    console.error("Internal Server Error:", error.message);
    res.status(500).json({ success: false, message: error.message });
  }
});

// Get all jobs
router.get('/jobs', async (req, res) => {
  try {
    const jobs = await JobModel.find();
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Delete a job by ID
router.delete('/jobs/:id', async (req, res) => {
  try {
    const job = await JobModel.findByIdAndDelete(req.params.id);
    if (!job) return res.status(404).json({ msg: "Job not found" });
    res.status(200).json({ msg: "Job deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server error" });
  }
});

// Signup route with hashed password
router.post('/signup', async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await Signupmodel.create({
      name,
      email,
      phone,
      password: hashedPassword,
    });

    res.status(201).json({ success: true, msg: "Signup successful", data: user });
  } catch (error) {
    console.error("Signup error:", error.message);
    res.status(500).json({ success: false, msg: "Signup failed", error: error.message });
  }
});

// Login route with password verification
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await Signupmodel.findOne({ email });

    if (!user) {
      return res.status(404).json({ success: false, msg: "No user found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ success: false, msg: "Incorrect password" });
    }

    res.status(200).json({ success: true, msg: "Login successful", data: "success" });
  } catch (error) {
    console.error("Login error:", error.message);
    res.status(500).json({ success: false, msg: "Login failed", error: error.message });
  }
});

module.exports = router;
