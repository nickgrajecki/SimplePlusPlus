var fs = require("fs");
var detailsFile = "./localfiles/details.json";
var details = require(__dirname + "/../../spp_modules/userDetails");
var xss = require("xss");

module.exports = function(req, res) {
  var age = xss(req.body.age);
  var weight = xss(req.body.userweight);
  var home = xss(req.body.userhome);
  var phone = xss(req.body.contact);
  var medication = xss(req.body.medication);
  var allergies = xss(req.body.allergies);
  // details.updateAge(age);
  // details.updateHeight(height);

  fs.readFile(detailsFile, function(err, data) {
    if (err) throw err;
    var detailsJSON = JSON.parse(data);
    if (age.length) {
      detailsJSON.age = age;
    }
    if (weight.length) {
      detailsJSON.weight = weight;
    }
    if (home.length) {
      detailsJSON.home = home;
    }
    if (phone.length) {
      detailsJSON.phone = phone;
    }
    if (medication.length) {
      detailsJSON.medication = medication;
    }
    if (allergies.length) {
      detailsJSON.allergies = allergies;
    }
    fs.writeFileSync(detailsFile, JSON.stringify(detailsJSON));
    res.redirect("/firstaid");
  });
};
