var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Product = new Schema({
    id: String,
    name: String,
    company: String,
    description: String,
    labels: String,
    picture: String,
  });
  module.exports = mongoose.model('Product', Product);
