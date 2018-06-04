//this Web socket creted by this toturial: https://www.youtube.com/watch?v=vQjiN8Qgs3c&index=1&list=PL4cUxeGkcC9i4V-_ZVwLmOusj8YAUhj_9
var express = require('express');
var socket = require('socket.io');

// App setup
var app = express();
var server = app.listen(4001, function(){
    console.log('listening for requests on port 4001,');
});

// Static files
app.use(express.static('public'));

// Socket setup & pass server
var io = socket(server);
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