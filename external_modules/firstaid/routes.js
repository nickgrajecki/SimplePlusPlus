var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var db = require(__dirname + "/../../spp_modules/dbconnect");
var details = require(__dirname + "/../../spp_modules/userDetails");

var todayDate = new Date().toISOString().replace('-', '/').split('T')[0].replace('-', '/');

module.exports = function(app) {
    
  //First aid module
  app.get("/firstaid", function(req, res) {
    var dbFood = db.food;
    dbFood.find({'date': todayDate}, { _id: 0, __v: 0, date: 0}, function(err, foods) {
        if (err) throw err;
        console.log(foods);
        res.render(__dirname + "/main", {
          name: details.name,
          foods: foods
        });
      })
  });

  //Process firstaid module
  app.post("/firstaid", urlencodedParser, function(req, res) {
    require("./firstaidnode")(req, res);
  });
};
