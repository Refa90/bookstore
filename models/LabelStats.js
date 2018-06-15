var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LabelStats = new Schema({
    labels: String,
    count: Number,
  });

module.exports = mongoose.model('LabelStats', LabelStats);