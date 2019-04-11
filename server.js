// Dependencies
// ===========================================================
var express = require('express');
var path = require('path');
var app = express();
var PORT = 3000;

// Data calling
// ===========================================================
var friends = require('./app/data/friends.js');



// Routes
// ===========================================================
// app.get('/', function(req, res) {
//   res.send('Welcome to the Friend finder app!');
// });

// Displays all characters
app.get('/api/friends', function(req, res) {
  return res.json(friends);
});


require(path.join(__dirname, './routing/apiRoutes'))(app);
require(path.join(__dirname, './routing/htmlRoutes'))(app);  

// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log('App listening on PORT http://localhost:' + PORT);
});


































// // Dependencies
// // ===========================================================
// var express = require('express');
// var path = require('path');

// var app = express();
// var PORT = 3000;

// // Routes
// // ===========================================================



// require(path.join(__dirname, './app/routing/apiRoutes'))(app);
// require(path.join(__dirname, './app/routing/htmlRoutes'))(app);

// // Start listening on PORT
// app.listen(PORT, function() {
//   console.log('Friend Finder app is listening on PORT http://localhost:'+ PORT);
// });