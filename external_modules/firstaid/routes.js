var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var details = require(__dirname + "/../../spp_modules/userDetails");
var foodList = "./localfiles/food.json";
var fs = require("fs");


module.exports = function(app) {
  //First aid module
  app.get("/firstaid", function(req, res) {
    try {
      fs.readFile(foodList, function(err, data) {
        if (err) throw err;
        if (data.length) {
          foods = JSON.parse(data);
          console.log(foods);
          res.render(__dirname + "/main", {
            name: details.name,
            foods: foods
          });
        }
      });
    } catch (ex) {
      console.log(ex);
    }
  });

  //Process firstaid module
  app.post("/firstaid", urlencodedParser, function(req, res) {
    require("./firstaidnode")(req, res);
  });
};
