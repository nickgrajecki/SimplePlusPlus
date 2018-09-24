var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var fs = require("fs");
var details = require(__dirname + "/../../spp_modules/userDetails");
var foodImport = require(__dirname + "/../../spp_modules/foodLog");
var foodList = "./localfiles/food.json";
var xss = require("xss");

//Set up routing for main routing ifile
module.exports = function(app) {
  //Main page
  app.get("/nutrition", function(req, res) {
    fs.readFile(foodList, function(err, data) {
      if (data.length && data != "Empty") {
        data = JSON.parse(data);
        var lastFood = data[data.length - 1];
        var newFood = data.reverse();
      }
      res.render(__dirname + "/main", {
        name: details.name,
        foods: newFood,
        fooditems: "",
        lastFood: lastFood
      });
    });
  });

  //After submmitting form
  app.post("/nutrition", urlencodedParser, function(req, res) {
    //Check string for XSS attempt
    var foodItems;
    var foodItem = xss(req.body.fooddiary);
    var insertDate = new Date()
      .toISOString()
      .replace("-", "/")
      .split("T")[0]
      .replace("-", "/");
    try {
      //Read in food file
      fs.readFile(foodList, function(err, data) {
        if (err) throw err;
        //Parse data
        if (data == "Empty") {
          foodItems = '["(' + insertDate + ")" + " " + foodItem + '"]';
          fs.writeFileSync(foodList, foodItems);
        } else {
          foodItems = JSON.parse(data);
          //Add new food item with date
          foodItems.push("(" + insertDate + ")" + " " + foodItem);
          //Save new file
          fs.writeFileSync(foodList, JSON.stringify(foodItems));
        }

        //Redirect back with the new data
      });
    } catch (ex) {
      console.log(ex);
    }
    res.redirect("back");
  });

  app.post("/nutritiondate", urlencodedParser, function(req, res) {
    var date = xss(req.body.datepicker);
    console.log(date);
    var found = false;
    var foundFood = null;
    try {
      fs.readFile(foodList, function(err, data) {
        if (err) throw err;
        var foods = JSON.parse(data);
        for (var i = 0; i < foods.length; i++) {
          if (foods[i].includes(date)) {
            found = true;
            if (foundFood == null) {
              foundFood = foods[i];
            } else {
              foundFood += " " + foods[i];
            }
          }
        }
        if (found == false) {
          foundFood = "No food found";
        }
        res.render(__dirname + "/main", {
          foods: foodImport.foodList,
          fooditems: foundFood,
          lastFood: foodImport.lastFood
        });
      });
    } catch (ex) {
      console.log(ex);
    }
  });
};
