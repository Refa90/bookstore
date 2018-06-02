var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Statistic = new Schema({
    city:String,
    count: int,
  });

  module.exports = mongoose.model('Statistic', Statistic);
