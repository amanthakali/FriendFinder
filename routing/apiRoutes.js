var friends = require("../app/data/friends");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });
  app.post("/api/friends", function(req, res) {

	var matchName = '';
	var matchImage = '';
	var totalDifference = 40;

		var userInput = req.body;
		console.log(userInput)
    var userResponses = userInput.scores;
  
for (var i = 0; i < friends.length; i++) {
	
			var diff = 0;
			for (var j = 0; j < userResponses.length; j++) {
				diff += Math.abs(friends[i].scores[j] - userResponses[j]);
			}
		if (diff < totalDifference) {

	 
			matchName = friends[i].name;
			matchImage = friends[i].photo;
		
    }
	}
	// Add new user
    friends.push(userInput);

		res.json({status: 'OK', matchName: matchName, matchImage: matchImage});
  });
};
