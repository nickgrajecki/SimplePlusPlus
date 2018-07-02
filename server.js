//Get all the necessary modules and basic configs
var express = require("express");
var app = express();
var path = require("path");

//Set up view engine and render CSS/JS
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(__dirname));
app.set('views', [path.join(__dirname, 'views'), path.join(__dirname, 'views/includes/')]);
app.set("view engine", "ejs");

require("./spp_modules/routes")(app);
require("./external_modules/firstaid/routes")(app);
require("./external_modules/nutrition/routes")(app);

//Port
app.listen(process.env.PORT || 3000);
