var express = require('express');
var app = express();
var statsRoutes = express.Router();

// Require Item model in our routes module
var LabelStats = require('../models/LabelStats');


/* GET ALL RESTAURANTS */
statsRoutes.route('/stats/label').get(function (req, res) { 
  
    groupObj = {}
    projectObj = { total : '$total', _id : 0}
    
    groupObj["label"] = "$label";
    projectObj["label"] = "$_id.label";
    
    var agg = 
        [
        {$group: {_id : groupObj, total:{$sum :1}}},
        {$project : projectObj}
        ];
    
    LabelStats.aggregate(agg)
    .then(rests => { res.json(rests); })
    .catch(error => { console.log(error); })
});

statsRoutes.route('/stats/rating').get(function (req, res) { 
  
    groupObj = {}
    projectObj = { total : '$total', _id : 0}
    
    groupObj["rating"] = "$rating";
    projectObj["rating"] = "$_id.rating";
    
    var agg = 
        [
        {$group: {_id : groupObj, total:{$sum :1}}},
        {$project : projectObj}
        ];
    
    LabelStats.aggregate(agg)
    .then(rests => { res.json(rests); })
    .catch(error => { console.log(error); })
});