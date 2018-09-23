//Get all the necessary modules and basic configs
var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");

//Import anti-injection filter
var filter = require("content-filter");
//Set up blacklist for filter
var blackList = ["$", "{", "&&", "||"];
var options = {
  urlBlackList: blackList,
  bodyBlackList: blackList
};

//Set up view engine and render CSS/JS
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(filter(options));
app.set("views", [
  path.join(__dirname, "views"),
  path.join(__dirname, "views/partials/")
]);
app.set("view engine", "ejs");

//Import all routing for app and modules from the relevant directory
require("./spp_modules/routes")(app);
require("./external_modules/firstaid/routes")(app);
require("./external_modules/nutrition/routes")(app);
require("./external_modules/bus/routes")(app);

//Port
app.listen(process.env.PORT || 3000);
