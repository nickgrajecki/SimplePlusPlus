var fs = require("fs");
var detailsFile = "./localfiles/details.json";
var db = require("./dbconnect");
var dbUser = db.user;
var name;

try {
  fs.readFile(detailsFile, function(err, data) {
    if (err) throw err;
    if (data.length) {
      data = JSON.parse(data);
      name = data.name;
      module.exports.name = data.name;
    }
  });
} catch (ex) {
  console.log(ex);
}

module.exports.updateAge = function(newAge) {
  dbUser.findOneAndUpdate(
    { username: name},
    { $set: { age: newAge } },
    function(err) {
      if (err) return console.error(err);
    }
  );
};

module.exports.updateHeight = function(newHeight) {
  dbUser.findOneAndUpdate(
    { username: name},
    { $set: { height: newHeight } },
    function(err) {
      if (err) return console.error(err);
    }
  );
};
