var express = require('express');
var app = express();
var restaurantRoutes = express.Router();

// Require Item model in our routes module
var Restaurant = require('../models/Restaurant');


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
    if(url.name != null){
      query.push({"name": url.name})
    }
    if(url.location != null){
      query.push({"location": url.location})
    }
    if(url.label != null){
      query.push({"label": url.label})
    }
    
    Restaurant.find().or(query)
    .then(rests => { res.json(rests); })
    .catch(error => { console.log(error); })
});

restaurantRoutes.route('/stats').get(function (req, res) {
  
  groupObj = {}
  projectObj = { total : '$total', _id : 0}


  url = req.query
  
  if(url.name != null){
    groupObj.push({"name": "$name"})
    projectObj.push("name", "$_id.name")
  }
  if(url.location != null){
    groupObj.push({"location": "$location"})
    projectObj.push("location", "$_id.location")
  }
  if(url.label != null){
    groupObj.push({"name": "$name"})
    projectObj.push("name", "$_id.name")
  }

  // var agg = 
  //   [
  //     {$group: {_id : {book : '$book',address:'$addr'}, total:{$sum :1}}},
  //     {$project : {book : '$_id.book', address : '$_id.address', total : '$total', _id : 0}}
  //   ];

  

   var agg = 
    [
      {$group: {_id : groupObj, total:{$sum :1}}},
      {$project : projectObj}
    ];
  
  Restaurant.aggregate(query)
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
  console.log(restaurant);
  restaurant.save()
    .then(item => {
    res.status(200).json({'restaurant': 'Restaurant added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
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

      restaurant.save().then(restaurant => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
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



// /* GET home page. */
// bookRoutes.get('/', function(req, res, next) {
//   res.send('Express RESTful API');
// });

module.exports = restaurantRoutes;
