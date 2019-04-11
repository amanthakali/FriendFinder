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

//render the html file
app.get('/', function(req, res){
    //res.render('home.html')
   res.sendFile(path.join(__dirname+'/public/home.html'));
});

// render the table that are reserved
app.get('/survey', function(req, res){
    res.sendFile(path.join(__dirname+'/public/survey.html'));
});


// app.post('/api/survey', function(req, res) {
//   console.log(req.parms);
//   return res.json(newFriend);
// });

// Displays a single character, or shows "No character found"
// app.get('/api/characters/:character', function(req, res) {
//   // Grab the selected parameter
//   var chosen = req.params.character;
//   console.log(chosen);

//   // Filter to show only the selected character
//   for (var i = 0; i < characters.length; i++) {
//     if (chosen === characters[i].routeName) {
//       return res.json(characters[i]);
//     }
//   }

//   // Otherwise display "No character found"
//   return res.send('No character found');
// });

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