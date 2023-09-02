const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: [3, 'Username must be at least 3 characters long']
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: [8, 'Password must be at least 8 characters long']
  },
  role: {
      type: String,
      required: true,
      enum: ['user', 'admin'],
      default: 'user'
  },
  knowledge: [{
    newKnowledge: {
      _id: mongoose.Schema.Types.ObjectId,
      type: String,
      required: true,
    }}
  ],
});


const User = mongoose.model('User', userSchema);

module.exports = User;