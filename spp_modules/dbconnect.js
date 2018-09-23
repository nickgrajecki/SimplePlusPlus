var mongoose = require("mongoose");

//Connect to mlab databse
mongoose.connect(
  "mongodb://admin:simpleplus1@ds161700.mlab.com:61700/simpleplus"
);

//Set new user schema for name, age, height
var userSchema = new mongoose.Schema({
  name: String,
  age: String,
  height: String
});

//Setnew user schema for food - date and items
var foodSchema = new mongoose.Schema({
  date: String,
  fooditem: String
});

var dbUser = mongoose.model("User", userSchema);
var dbFood = mongoose.model("Food", foodSchema);

//Function to retrieve food list
var getFood = dbFood.find({}, { _id: 0, __v: 0 }, function(err, foods) {
  if (err) throw err;
  return foods;
}).exec();
console.log(getFood);

module.exports.getFood = getFood;
module.exports.user = dbUser;
module.exports.food = dbFood;
