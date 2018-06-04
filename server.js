// server.js

const express = require('express'),
  path = require('path'),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  mongoose = require('mongoose'),
  config = require('./config/DB'),
  bookRoutes = require('./expressRoutes/bookRoutes'),
<<<<<<< HEAD
  recipeApi = require('./scripts/recipeApi');
=======
  restaurantRoutes = require('./expressRoutes/restaurantRoutes');
>>>>>>> a4c89a7754c3a1c9d05091836947c91c8c46ce98

mongoose.Promise = global.Promise;
mongoose.connect(config.DB).then(
  () => {
    console.log('Database is connected')
  },
  err => {
    console.log('Can not connect to the database' + err)
  }
);

const app = express();
app.use(bodyParser.json());
app.use(cors());
const port = process.env.PORT || 4000;

app.use('/books', bookRoutes);
app.use('/restaurants', restaurantRoutes);

const server = app.listen(port, function() {
  console.log('Listening on port ' + port);
});


recipeApi.getRecipe('chicken')