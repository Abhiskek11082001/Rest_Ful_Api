// models/user.js

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  UserGUID: { type: String, unique: true, required: true },
  EmailAddress: { type: String, required: true },
  BusinessName: String,
  BusinessNumber: String,
  UniqueCode: String,
  ExternalReference: String,
  PhoneNum: String,
  HomeAddress: {
    Street: { type: String, required: true },
    City: { type: String, required: true },
    State: { type: String, required: true },
    PostalCode: { type: String, required: true },
  },
  PostalAddress: {
    Street: { type: String, required: true },
    City: { type: String, required: true },
    State: { type: String, required: true },
    PostalCode: { type: String, required: true },
  },
  CreationDate: { type: Date, default: Date.now },
  ModifyDate: { type: Date, default: Date.now },
  ArchiveDate: Date,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
