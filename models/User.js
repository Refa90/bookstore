var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var User = new Schema({
    id: String,
    name: String,
    userName: String,
    password: String,
    location: String,
    labels: Array,
  });

  module.exports = mongoose.model('User', User);
