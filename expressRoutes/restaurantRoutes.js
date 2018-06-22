var express = require('express');
var app = express();
var restaurantRoutes = express.Router();

// Require Item model in our routes module
var Restaurant = require('../models/Restaurant');
const request = require('request');

/* GET ALL RESTAURANTS */
restaurantRoutes.route('/').get(function (req, res) {  
  
  Restaurant.find(function (err, rests){
    if(err){
      console.log(err);
    }
    else {
      res.json(rests);
    }
  });
});

restaurantRoutes.route('/search').get(function (req, res) {
    url = req.query
    query = []
    if(url.name != null  && url.name!="null"){
      query.push({"name": url.name})
    }
    if(url.location != null && url.location!="null"){
      query.push({"location": url.location})
    }
    if(url.label != null && url.label!="null"){
      query.push({"labels": url.label})
    }
    
    Restaurant.find().or(query)
    .then(rests => { res.json(rests); })
    .catch(error => { console.log(error); })
});

restaurantRoutes.route('/searchImage').get(function (req, res) {
  url = req.query
  query = []
  console.log("the parameter is: "+url.name)
  request('http://127.0.0.1:5000/bar?url='+url.name , { json: false }, (err, resInner, body) => {
        if (err) { 
            return console.log(err); 
        }
        console.log(body);
        res.json(body);
    });
});


restaurantRoutes.route('/stats').get(function (req, res) {
  
  groupObj = {}
  projectObj = { total : '$total', _id : 0}

  valuesArr = req.url.split("?")[1].split(",")
  
  if(valuesArr.includes("name")){
    groupObj["name"] = "$name";
    projectObj["name"] = "$_id.name";
  }
  if(valuesArr.includes("location")){
    groupObj["location"] = "$location";
    projectObj["location"] = "$_id.location";
  }
  if(valuesArr.includes("label")){
    groupObj["label"] = "$label";
    projectObj["label"] = "$_id.label";
  }

  var agg = 
    [
      {$group: {_id : groupObj, total:{$sum :1}}},
      {$project : projectObj}
    ];
  
  Restaurant.aggregate(agg)
  .then(rests => { res.json(rests); })
  .catch(error => { console.log(error); })
});

// /* GET SINGLE RESTAURANT BY ID */
restaurantRoutes.get('/:id', function(req, res, next) {
  Restaurant.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE RESTAURANT */
restaurantRoutes.route('/add').post(function (req, res) {
  var restaurant = new Restaurant(req.body);

  erros = validate(restaurant, res);

  if(errors.length > 0){
    res.status(400);
    res.send(erros);
  } else{
    console.log(restaurant);
    restaurant.save()
      .then(item => {
      res.status(200).json({'restaurant': 'Restaurant added successfully'});
      })
      .catch(err => {
      res.status(400).send("unable to save to database");
      });
  }
});

/* UPDATE RESTAURANT */
restaurantRoutes.route('/edit/:id').get(function (req, res) {
  var id = req.params.id;
  Restaurant.findById(id, function (err, restaurant){
      res.json(restaurant);
  });
});

restaurantRoutes.route('/update/:id').post(function (req, res) {
  Restaurant.findById(req.params.id, function(err, restaurant) {
    if (!restaurant)
      return next(new Error('Could not load Document'));
    else {

      restaurant.name = req.body.name;
      restaurant.location = req.body.location;
      restaurant.description = req.body.description;
      restaurant.labels = req.body.labels;
      restaurant.rating = req.body.rating;
      restaurant.picture = req.body.picture;
      restaurant.url = req.body.url;
      restaurant.lon = req.body.lon;
      restaurant.lat = req.body.lat;

      erros = validate(restaurant, res);

      if(errors.length > 0){
        res.status(400);
        res.send(erros);
      } else{
        restaurant.save().then(restaurant => {
          res.json('Update complete');
        })
        .catch(err => {
              res.status(400).send("unable to update the database");
        });
      }
    }
  });
});

/* DELETE RESTAURANT */
restaurantRoutes.route('/delete/:id').get(function (req, res) {
  Restaurant.findByIdAndRemove({_id: req.params.id}, function(err, restaurant){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

function validate(restaurant, res){
  errors = [];
  if(restaurant.name == null || restaurant.name == "undefined"){
    errors.push("name is missing");
  }

  if(restaurant.location == null || restaurant.location == "undefined"){
    errors.push("location is missing");
  }

  if(restaurant.labels == null || restaurant.labels == "undefined"){
    errors.push("labels is missing");
  }

  if(restaurant.rating == null || restaurant.rating == "undefined"){
    errors.push("labels is missing");
  }else{
    var ratingNumeric = parseInt(restaurant.rating);
    if(isNaN(ratingNumeric)){
      errors.push("labels is missing");
    }
  }

  if(restaurant.url == null || restaurant.url == "undefined"){
    errors.push("url is missing");
  }
    
  return errors;
}

module.exports = restaurantRoutes;
