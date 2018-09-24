var fs = require("fs");
var foodFile = "./localfiles/food.json";
try {
  //Read in food list file
  fs.readFile(foodFile, function(err, data) {
    //Throw error if necessary
    if (err) throw err;
    //If file isn't empty, parse JSON data and set export values
    if (data.length) {
      data = JSON.parse(data);
      module.exports.lastFood = data[data.length - 1];
      module.exports.foodList = data.reverse();
    }
  });
} catch (ex) {
  console.log(ex);
}
