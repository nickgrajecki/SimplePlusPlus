var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var details = require(__dirname + "/../../spp_modules/userDetails");
var foods = require(__dirname + "/../../spp_modules/foodLog");
var fs = require("fs");

module.exports = function(app) {
  //First aid module redirect /GET
  app.get("/firstaid", function(req, res) {
    res.render(__dirname + "/main", {
      name: details.name,
      foods: foods.foodList
    });
  });

  //Process firstaid module
  app.post("/firstaid", urlencodedParser, function(req, res) {
    require("./firstaidnode")(req, res);
  });
};
