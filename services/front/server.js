var express = require('express');
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var path = require('path');

app.use(express.static("src/component"));

server.listen(80);
// WARNING: app.listen(80) will NOT work here!

app.get('/', function (req, res) {
    res.sendFile(path.resolve(__dirname, "./src/component/index.html"));
});

io.on('chat message', function (socket) {
  console.log(socket);
});

io.emit('test');
app.listen(8080);
  
