'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UsersSchema = new Schema({
  fname: String,
  lname: String,
  email: String,
  role: { type: Schema.Types.ObjectId, ref: 'Roles' },
});

module.exports = mongoose.model('Users', UsersSchema);
