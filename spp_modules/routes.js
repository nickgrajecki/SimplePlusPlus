var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var fs = require("fs");
var details = require(__dirname + "/../spp_modules/userDetails");

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

  app.get("/index", function(req, res) {
    res.render("home", { name: details.name });
  });

  app.get("/settings", function(req, res) {
    res.render("settings", { name: details.name });
  });

  app.get("/support", function(req, res) {
    res.render("support", { name: details.name });
  });

  app.get("/feedback", function(req, res) {
    res.render("feedback", { name: details.name });
  });

  //Module selection under settings redirect
  app.get("/modules", function(req, res) {
    res.render("modules", { name: details.name });
  });

  //Process module selection
  app.post("/modules", urlencodedParser, function(req, res) {
    require(__dirname + "/spp_modules/moduleSelect")(req);
    res.render("modules", { name: details.name });
  });
};
