var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var details = require(__dirname + "/../../spp_modules/userDetails");

module.exports = function(app) {
  app.get("/maps", function(req, res) {
    console.log(details.homeaddress)
    res.render(__dirname + "/bus", { homeaddress: details.home });
  });
};
