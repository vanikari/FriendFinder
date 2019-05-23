console.log('API Route Connected Successfully');


// Link in Friends Data
var friends = require('../data/friends.js');


// Includes Two Routes
function apiRoutes(app) {


//   Route used to display a JSON of all possible friends.
  
app.get("/api/friends", function(req, res) {
return res.json(friends);
});

  // Create New Characters - takes in JSON input
app.post("/api/friends", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newFriend = req.body;
  
    // Using a RegEx Pattern to remove spaces from newFriend
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newFriend);
  
    friends.push(newFriend);
  
    res.json(newFriend);
  });

}

// Export for use in main server.js file
module.exports = apiRoutes;