var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: false });
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

  //Page routing
  app.get("/index", function(req, res) {
    res.render("home", { name: details.name });
  });

  app.get("/settings", function(req, res) {
    res.render("settings", { name: details.name });
  });

  app.get("/support", function(req, res) {
    res.render("support", { name: details.name });
  });

  app.get("/config", function(req, res) {
    res.render("config", { name: details.name });
  });

  app.post("/config", urlencodedParser, function(req, res) {
    require(__dirname + "/configSelect")(req);
    res.render("config", { name: details.name });
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
}
