var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Restaurant = new Schema({
    id: String,
    name: String,
    location: String,
    description: String,
    labels: Array,
    starsAmount: int,
    picture: String,
  });
  module.exports = mongoose.model('Restaurant', Restaurant);
