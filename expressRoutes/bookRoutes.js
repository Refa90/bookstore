// bookRoutes.js

var express = require('express');
var app = express();
var bookRoutes = express.Router();

// Require Item model in our routes module
var Book = require('../models/Book');


/* GET ALL BOOKS */
bookRoutes.route('/').get(function (req, res) {
   Book.find(function (err, books){
    if(err){
      console.log(err);
    }
    else {
      res.json(books);
    }
  });
});

// /* GET SINGLE BOOK BY ID */
bookRoutes.get('/:id', function(req, res, next) {
  Book.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE BOOK */
bookRoutes.route('/add').post(function (req, res) {
  var book = new Book(req.body);
  console.log(book);
   book.save()
    .then(item => {
    res.status(200).json({'book': 'Book added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

/* UPDATE BOOK */
bookRoutes.route('/edit/:id').get(function (req, res) {
  var id = req.params.id;
  Book.findById(id, function (err, book){
      res.json(book);
  });
});

bookRoutes.route('/update/:id').post(function (req, res) {
   Book.findById(req.params.id, function(err, book) {
    if (!book)
      return next(new Error('Could not load Document'));
    else {
      book.title = req.body.title;
      book.author = req.body.author;
      book.description = req.body.description;
      book.published_year = req.body.published_year;
      book.publisher = req.body.publisher;

      book.save().then(book => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

/* DELETE BOOK */
bookRoutes.route('/delete/:id').get(function (req, res) {
   Book.findByIdAndRemove({_id: req.params.id}, function(err, book){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});



// /* GET home page. */
// bookRoutes.get('/', function(req, res, next) {
//   res.send('Express RESTful API');
// });

module.exports = bookRoutes;
