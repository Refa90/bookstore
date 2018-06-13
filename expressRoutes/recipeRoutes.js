
var express = require('express');
var app = express();
var recipeRoutes = express.Router();
const request = require('request');

recipeApi = require('../scripts/recipeApi');

recipeRoutes.route('/search').get(function (req, res) {
    request('http://food2fork.com/api/search?key=790edb877a7b2034d8a143910769dabc&q='+req.query.label, { json: false }, (err, resInner, body) => {
        if (err) { 
            return console.log(err); 
        }
        console.log(body);
        
        res.json(body);
    });
});


module.exports = recipeRoutes;