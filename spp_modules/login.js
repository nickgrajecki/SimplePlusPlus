// var db = require("./dbconnect");
// var dbUser = db.user;
// var fs = require("fs");
// var detailsFile = __dirname + "/../localfiles/details.json";

// module.exports = function(req, res) {
//   //Get name from form
//   var name = req.body.username;
//   //Find name in Mongo
//   var sendname = dbUser.find({ username: name }, { _id: 0, username: 1 });
//   sendname.exec(function(err, data) {
//     console.log(data);
//     if (err) {
//       throw err;
//     } else if (data.length) {
//       //If a username was put in
//       data = JSON.parse(JSON.stringify(data));
//       fs.writeFileSync(detailsFile, JSON.stringify({ name: name }));
//       console.log(data[0].username);
//       res.render("home", { name: data[0].username });
//     } else {
//       res.render("login", { message: "Please put in a name" });
//     }
//   });
// };
