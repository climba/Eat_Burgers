var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");


var apiRoutes = require("./app/routing/apiRoutes.js");
var htmlRoutes = require("./app/routing/htmlRoutes.js");

// Sets up the Express App
// =============================================================
// var app = express();
var app = express();
// var PORT = 3000; // Local machine  conf
var PORT = process.env.PORT || 3000; // heroku conf

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', htmlRoutes);
app.use('/api', apiRoutes);

<<<<<<< HEAD
=======
// Import routes and give the server access to them.
var routes = require("./controllers/catsController.js");
>>>>>>> parent of 3fffd98... Fixed mysql error on click function


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});