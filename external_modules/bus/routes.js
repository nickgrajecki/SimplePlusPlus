var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var details = require(__dirname + "/../../spp_modules/userDetails");
var foodList = "./localfiles/food.json";
var fs = require("fs");

module.exports = function(app) {
  app.get("/localaid", function(req, res) {
    res.render(__dirname + "/bus", { name: details.name });
  });
};
