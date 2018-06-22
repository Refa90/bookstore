// server.js

const express = require('express'),
  path = require('path'),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  mongoose = require('mongoose'),
  config = require('./config/DB'),
  bookRoutes = require('./expressRoutes/bookRoutes'),
  restaurantRoutes = require('./expressRoutes/restaurantRoutes'),
  recipeRoutes=require('./expressRoutes/recipeRoutes'),
  statsRoutes = require('./expressRoutes/statsRoutes'),
  socket = require('socket.io');
  

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
app.use('/recipe', recipeRoutes);
app.use('/stats', statsRoutes)


const server = app.listen(port, function() {
  console.log('Listening on port ' + port);
});

var app2 = express();
// var cors = require('cors');    
app2.use(cors({credentials: true,origin: 'http://localhost:4200'}));

var server2 = app2.listen(4001, function(){
    console.log('listening for requests on port 4001,');
});

// Socket setup & pass server
var io = socket(server2);
io.on('connection', (socket) => {

    console.log('made socket connection', socket.id);

    // Handle chat event
    socket.on('chat', function(data){
        // console.log(data);
        io.sockets.emit('chat', data);
    });

    // Handle typing event
    socket.on('typing', function(data){
        socket.broadcast.emit('typing', data);
    });
});
//  recipeApi.getRecipe('chicken')
