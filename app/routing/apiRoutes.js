console.log('API Route Connected Successfully');


// Link in Friends Data
var friendsData = require('../data/friends.js');


// Includes Two Routes
function apiRoutes(app) {

//   Route used to display a JSON of all possible friends.
app.get("/api/friends", function(req, res) {
   res.json(friendsData);
});


// Create New Characters - takes in JSON input
app.post("/api/friends", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newFriend = req.body;

    var scoresArray = [];
    for(var i=0; i < newFriend.scores.length; i++){
      scoresArray.push( parseInt(newFriend.scores[i]) )
    }
    newFriend.scores = scoresArray;

    // Cross check the new friend entry with the existing ones
    var scoreComparisionArray = [];
    for(var i=0; i < friendsData.length; i++){

      // Check each friend's scores and sum difference in points
      var currentComparison = 0;
      for(var j=0; j < newFriend.scores.length; j++){
        currentComparison += Math.abs( newFriend.scores[j] - friendsData[i].scores[j] );
      }

      // Push each comparison between friends to array
      scoreComparisionArray.push(currentComparison);
    }
  

    // Using a RegEx Pattern to remove spaces from newFriend
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newFriend);
  
    friendsData.push(newFriend);
  
    res.json(newFriend);
  });

}

// Export for use in main server.js file
module.exports = apiRoutes;