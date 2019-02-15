const express = require('express');

const app = express();
const path = require('path');
// const survey = require(path.join(__dirname + 'app/public/survey.js'));

const PORT = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'app/public')));



// need api routing for interacting withe back-end
require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);



app.listen(PORT, function () {
    console.log("Listening on port " + PORT);
});