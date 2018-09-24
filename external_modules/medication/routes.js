var bodyParser = require("body-parser");
var details = require(__dirname + "/../../spp_modules/userDetails");


//Set up routing for main routing ifile
module.exports = function(app) {
  //Main page
  app.get("/medication", function(req, res) {
    res.render(__dirname + "/main", {
      name: details.name,
      medication: details.medication
    });
  });
};
