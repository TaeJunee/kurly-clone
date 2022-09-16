const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({

  memberId: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  extraAddress: {
    type: String,
    required: true,
  },
  gender: {
    type: String
  },
  birth: {
    type: Object
  },
}, {timestamps: true})

const User = mongoose.model('User', userSchema);
module.exports = User