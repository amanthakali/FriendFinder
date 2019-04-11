var path = require('path');
// Import the list of friend entries

var friends = require('../app/data/friends');
// Export API routes
module.exports = function(app) {
	// console.log('___ENTER apiRoutes.js___');

	// Total list of friend entries
	app.get('/api/friends', function(req, res) {
		res.json(friends);
    });
}