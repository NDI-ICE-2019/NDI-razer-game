var express = require('express');
var app = express();
var path = require('path');

app.use(express.static("src/component"));

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.resolve(__dirname, "./src/component/index.html"))
});

app.listen(8080);