// routes/contactRoutes.js
const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

// POST route to submit the contact form
router.post('/submit', contactController.submitContactForm);

module.exports = router;
