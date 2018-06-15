var express = require('express');
var app = express();
var statsRoutes = express.Router();

// Require Item model in our routes module
var Restaurant = require('../models/Restaurant');

/* GET ALL RESTAURANTS */
statsRoutes.route('/label').get(function (req, res) { 
  
    groupObj = {}
    projectObj = { total : '$total', _id : 0}
    
    groupObj["labels"] = "$labels";
    projectObj["labels"] = "$_id.labels";
    
    var agg = 
        [
        {$group: {_id : groupObj, total:{$sum :1}}},
        {$project : projectObj}
        ];
    
    Restaurant.aggregate(agg)
    .then(rests => {
        labelStats = []; 
        for (var i in rests){
            labelStats.push({labels: rests[i].labels, total: rests[i].total});
        }
        res.json(labelStats); 
    })
    .catch(error => { console.log(error); })
});

statsRoutes.route('/rating').get(function (req, res) { 
  
    groupObj = {}
    projectObj = { total : '$total', _id : 0}
    
    groupObj["rating"] = "$rating";
    projectObj["rating"] = "$_id.rating";
    
    var agg = 
        [
        {$group: {_id : groupObj, total:{$sum :1}}},
        {$project : projectObj}
        ];
    
    Restaurant.aggregate(agg)
    .then(rests => { 
        ratingStats = []; 
        for (var i in rests){
            ratingStats.push({rating: rests[i].rating, total: rests[i].total});
        }
        res.json(ratingStats); 
    })
    .catch(error => { console.log(error); })
});


module.exports = statsRoutes;