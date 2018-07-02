var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var fs = require('fs');
var details = require(__dirname + "/../../spp_modules/userDetails");

module.exports = function(app) {
    
  //First aid module
  app.get("/firstaid", function(req, res) {
    fs.readFile("./external_modules/firstaid/main.html","utf8", function(err, html) {
        if (err) {
          throw err;
        } else {
          res.render("module", { content: html, name: details.name });
        }
      }
    );
  });

  //Process firstaid module
  app.post("/firstaid", urlencodedParser, function(req, res) {
    require("./firstaidnode")(req, res);
  });
};
