console.log('HTML Route Connected Successfully');


// Node Dependencies
var path = require('path');


// Includes Two Routes
function htmlRoutes(app) {
// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page


app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
 
  });
  
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
  });

}

// Export for use in main server.js file
module.exports = htmlRoutes;