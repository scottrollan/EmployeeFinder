const express = require('express');
// allows use of express package, with which you can..

//create a server and store in variable 'app'
const app = express();

//assign a port number to listen on, PORT in caps by convention
const PORT = process.env.PORT || 3000;

//define actions to be performed when GET request is made
//     home dir ,request  response
app.get('/', function(req, res) {
    res.send("hello world!"); //response sends to browser
});

//start server so it can begin listening to client req
app.listen(PORT, function() {
    console.log("Listening onf port " + PORT);
}); //function() is an optional parameter, could have finished with (PORT)

//creat a new route (positive-feedback) accessible to user
//located at localhoset:8080/positive-feedback
app.get('/positive-feedback', function(req, res){
    res.send("I love you, World!"); 
});

