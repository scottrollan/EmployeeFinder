const express = require('express');

const app = express();

// const survey = require(path.join(__dirname + 'app/public/survey.js'));

const PORT = process.env.PORT || 3000;

const path = require('path');

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/app/public/home.html')); 
});

app.get('/survey', function(req, res){
    res.sendFile(path.join(__dirname + '/app/public/survey.html')); 
});

app.listen(PORT, function() {
    console.log("Listening on port " + PORT);
});