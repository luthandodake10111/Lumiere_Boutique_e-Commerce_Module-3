// controllers/contactController.js
const Contact = require('../models/contactModel');

exports.submitContactForm = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Create a new contact submission
    const newContact = new Contact({
      name,
      email,
      message,
    });

    // Save to database (assuming you're using MongoDB)
    await newContact.save();

    // Respond back to the client
    res.status(200).json({
      message: 'Your message has been sent successfully!',
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong, please try again later.' });
  }
};
