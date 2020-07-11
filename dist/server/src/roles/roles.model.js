'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RoleSchema = new Schema({
  _id: Schema.Types.ObjectId,
  name: String,
});

module.exports = mongoose.model('Roles', RoleSchema);
