var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LabelStats = new Schema({
    label:String,
    count: int,
  });

  module.exports = mongoose.model('LabelStats', LabelStats);