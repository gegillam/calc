'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var MessageSchema = new Schema({
  title: String,
  body: String,
  active: Boolean,
  name: String,
  user: Object
});

module.exports = mongoose.model('Message', MessageSchema);
