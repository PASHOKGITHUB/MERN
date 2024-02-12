const mongoose = require('mongoose');

const personalInfoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true // Remove leading and trailing whitespaces
  },
  contactDetails: {
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true, // Convert email to lowercase
      match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ // Basic email format validation
    },
    phone: {
      type: String,
      validate: {
        validator: function(value) {
          // Basic phone number validation (assuming a simple format)
          return /^\d{10}$/.test(value);
        },
        message: props => `${props.value} is not a valid phone number!`
      }
    }
  }
});

const userSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6 // Minimum length for the password
  },
  role: {
    type: String,
    enum: ['admin', 'user'],
    required: true
  },
  personalInfo: {
    type: personalInfoSchema,
    required: true
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
