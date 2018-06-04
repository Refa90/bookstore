// bookRoutes.js

var express = require('express');
var app = express();
var restaurantRoutes = express.Router();

// Require Item model in our routes module
var Restaurant = require('../models/Restaurant');


/* GET ALL BOOKS */
restaurantRoutes.route('/').get(function (req, res) {
  Restaurant.find(function (err, books){
    if(err){
      console.log(err);
    }
    else {
      res.json(books);
    }
  });
});

// /* GET SINGLE BOOK BY ID */
restaurantRoutes.get('/:id', function(req, res, next) {
  Restaurant.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE BOOK */
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

/* UPDATE BOOK */
restaurantRoutes.route('/edit/:id').get(function (req, res) {
  var id = req.params.id;
  Restaurant.findById(id, function (err, book){
      res.json(book);
  });
});

restaurantRoutes.route('/update/:id').post(function (req, res) {
  Restaurant.findById(req.params.id, function(err, book) {
    if (!restaurant)
      return next(new Error('Could not load Document'));
    else {
      restaurant.id = req.body.id;
      restaurant.name = req.body.name;
      restaurant.location = req.body.location;
      restaurant.labels = req.body.labels;
      restaurant.starsAmount = req.body.starsAmount;
      restaurant.picture = req.body.picture;

      restaurant.save().then(book => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

/* DELETE BOOK */
restaurantRoutes.route('/delete/:id').get(function (req, res) {
  Restaurant.findByIdAndRemove({_id: req.params.id}, function(err, book){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});



// /* GET home page. */
// bookRoutes.get('/', function(req, res, next) {
//   res.send('Express RESTful API');
// });

module.exports = restaurantRoutes;
