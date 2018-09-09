var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var db = require(__dirname + "/../../spp_modules/dbconnect");
var details = require(__dirname + "/../../spp_modules/userDetails");

module.exports = function(app) {

  app.get("/diary", function(req, res) {
  });

  //Process firstaid module
  app.post("/firstaid", urlencodedParser, function(req, res) {
    require("./firstaidnode")(req, res);
  });
};
