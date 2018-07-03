var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var fs = require("fs");
var db = require(__dirname + "/../../spp_modules/dbconnect");
var details = require(__dirname + "/../../spp_modules/userDetails");

module.exports = function(app) {
  app.get("/nutrition", function(req, res) {
    var dbFood = db.food;
    dbFood.find({}, { _id: 0, __v: 0 }, function(err, foods) {
        if (err) throw err;
        console.log(foods);
        res.render(__dirname + "/main", {
          name: details.name,
          foods: foods
        });
      })
    
  });

  app.post("/nutrition", urlencodedParser, function(req, res) {
    var dbFood = db.food;
    var food = req.body.fooddiary;
    var insertDate = new Date()
      .toISOString()
      .replace("-", "/")
      .split("T")[0]
      .replace("-", "/");
    new dbFood({
      date: insertDate,
      fooditem: food
    }).save();
    res.redirect("/nutrition");
  });
};
