var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var fs = require("fs");
var details = require(__dirname + "/../../spp_modules/userDetails");
var foodList = "./localfiles/food.json";
var xss = require("xss");

//Set up routing for main routing ifile
module.exports = function(app) {
  //Main page
  app.get("/nutrition", function(req, res) {
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

  //After submmitting form
  app.post("/nutrition", urlencodedParser, function(req, res) {
    var food = xss(req.body.fooddiary);
    var insertDate = new Date()
      .toISOString()
      .replace("-", "/")
      .split("T")[0]
      .replace("-", "/");
    try {
      fs.readFile(foodList, function(err, data) {
        if (err) throw err;
        foods = JSON.parse(data);
        foods.push("(" + insertDate + ")" + " " + food);
        fs.writeFileSync(foodList, JSON.stringify(foods));
        res.redirect("/nutrition");
      });
    } catch (ex) {
      console.log(ex);
    }
  });
};
