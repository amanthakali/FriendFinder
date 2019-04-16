// // var path = require('path');
// // Import the list of friend entries

// var friends = require('../app/data/friends');
// // Export API routes
// module.exports = function(app) {
// 	// console.log('___ENTER apiRoutes.js___');

// 	// Total list of friend entries
// 	app.get('/api/friends', function(req, res) {
// 		res.json(friends);
//     });


// // Add new friend entry
// app.post('/api/friends', function(req, res) {
// 	// Capture the user input object
// 	// console.log(req);
// 	var userInput = req.body;
// 	console.log('userInput 333333333 = ' + userInput);

// 	var userResponses = userInput.scores;
// 	// console.log('userResponses = ' +JSON.stringify(userResponses));

// 	// Compute best friend match
// 	var matchName = '';
// 	var matchImage = '';
// 	var totalDifference = 40; // Make the initial value big for comparison

// 	// Examine all existing friends in the list
// 	for (var i = 0; i < friends.length; i++) {
	
// 		var diff = 0;
// 		for (var j = 0; j < userResponses.length; j++) {
// 			diff += Math.abs(friends[i].scores[j] - userResponses[j]);
// 		}
	
// 		if (diff < totalDifference) {

// 			totalDifference = diff;
// 			matchName = friends[i].name;
// 			matchImage = friends[i].photo;
// 		}
// 	}

// 	// Add new user
// 	friends.push(userInput);

// 	// Send appropriate response
// 	res.json({status: 'OK', matchName: matchName, matchImage: matchImage});
// });
// };==

var friends = require("../app/data/friends");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });
  app.post("/api/friends", function(req, res) {
  
    var bestMatch = {
      name: "",
      photo: "",
      friendDifference: Infinity
    };

  
		var userInput = req.body;
		console.log(userInput)
    var userScores = userInput.scores;
    var totalDifference;


    for (var i = 0; i < friends.length; i++) {
      var currentFriend = friends[i];
      totalDifference = 0;

      console.log(currentFriend.name);

      //  loops through all the scores of each friend
      for (var j = 0; j < currentFriend.scores.length; j++) {
        var currentFriendScore = currentFriend.scores[j];
        var currentUserScore = userScores[j];

        // calculate the difference between the scores and sum them into the totalDifference
        totalDifference += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));
      }

      // If the sum of differences is less then the differences of the current "best match"
      if (totalDifference <= bestMatch.friendDifference) {
        // Reset the bestMatch to be the new friend.
        bestMatch.name = currentFriend.name;
        bestMatch.photo = currentFriend.photo;
        bestMatch.friendDifference = totalDifference;
      }
    }

		// Add new user

    friends.push(userInput);

    // Send appropriate response
    res.json(bestMatch);
  });
};


