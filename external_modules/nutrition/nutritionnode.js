var fs = require('fs');
var foodFile = './localfiles/food.json';
var db = require(__dirname + '/../../spp_modules/dbconnect');
var dbUser = db.user;

module.exports = function (req, res) {
    var food = req.body.fooddiary;
    var config = JSON.parse(fs.readFileSync(foodFile));
    config["food"].push(food);
    var configJSON = JSON.stringify(config);
    fs.writeFileSync(foodFile, configJSON);
    // var obj = { food: food };
    // console.log(obj)
    // fs.writeFileSync(foodFile, JSON.stringify(obj));
    res.redirect('/nutrition');
}