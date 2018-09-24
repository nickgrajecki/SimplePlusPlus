var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var details = require(__dirname + "/../spp_modules/userDetails");
var fs = require("fs");
var foodList = "./localfiles/food.json";

module.exports = function(app) {
  //Action after attempting to login
  app.post("/", urlencodedParser, function(req, res) {
    require("./spp_modules/login")(req, res);
  });

  //Login
  app.get("/", function(req, res) {
    if (details.name == undefined) {
      res.render("login");
    } else {
      res.render("home", { name: details.name });
    }
  });

  //Page routing

  //Home
  app.get("/index", function(req, res) {
    res.render("home", { name: details.name });
  });

  //Settings
  app.get("/settings", function(req, res) {
    res.render("settings", { name: details.name });
  });

  //Help page
  app.get("/support", function(req, res) {
    res.render("support", { name: details.name });
  });

  //Audiovisual settings redirect
  app.get("/config", function(req, res) {
    res.render("config", { name: details.name });
  });

  app.get("/demo", function(req, res) {
    res.render("demo", { name: details.name });
  });

  //Audiovisual form action
  app.post("/config", urlencodedParser, function(req, res) {
    require(__dirname + "/configSelect")(req);
    res.render("config", { name: details.name });
  });

  //Other settings page
  app.get("/other", function(req, res) {
    res.render("other", { name: details.name });
  });

  //Module selection under settings redirect
  app.get("/modules", function(req, res) {
    res.render("modules", { name: details.name });
  });
  //Process module selection
  app.post("/modules", urlencodedParser, function(req, res) {
    require(__dirname + "/moduleSelect")(req);
    res.render("modules", { name: details.name });
  });
};
