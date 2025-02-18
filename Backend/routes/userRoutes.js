const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Create user route
router.post('/users', async (req, res) => {
    try {
      const { name, email, industry, skills, phone_number } = req.body;
      
      // Check if user with email already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ error: 'User with this email already exists' });
      }
  
      const user = new User({
        name,
        email,
        industry,
        skills,
        phone_number
      });
  
      const savedUser = await user.save();
      res.status(201).json(savedUser);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

module.exports = router;