var fs = require("fs");
var foodFile = "./localfiles/food.json";
var db = require(__dirname + "/../../spp_modules/dbconnect");
var dbFood = db.food;

module.exports = function(req, res) {
  var food = req.body.fooddiary;
  var insertDate = new Date().toISOString().replace('-', '/').split('T')[0].replace('-', '/');
  new dbFood({
    date: insertDate,
    fooditem: food
  }).save();

  //   var config = JSON.parse(fs.readFileSync(foodFile));
  //   config["food"].push(food);
  //   var configJSON = JSON.stringify(config);
  //   fs.writeFileSync(foodFile, configJSON);
  res.redirect("/nutrition");
};
