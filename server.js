// Dependencies
// ===========================================================
var express = require('express');
var path = require('path');
var app = express();
var PORT = 3200;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Data calling
// ===========================================================

require(path.join(__dirname, './routing/apiRoutes'))(app);
require(path.join(__dirname, './routing/htmlRoutes'))(app);  


// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log('App listening on PORT http://localhost:' + PORT);
});

