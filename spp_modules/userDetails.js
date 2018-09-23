var fs = require("fs");
var detailsFile = "./localfiles/details.json";
var db = require("./dbconnect");
var dbUser = db.user;;


//Read user details file
try {
  //Read in personal details file
  fs.readFile(detailsFile, function(err, data) {
    //Throw error if necessary
    if (err) throw err;
    if (data.length) {
      //If file isn't empty, parse JSON data and set export values
      data = JSON.parse(data);
      module.exports.age = data.age;
      module.exports.weight = data.weight;
      module.exports.home = data.home;
      module.exports.phone = data.phone;
      module.exports.medication = data.medication;
      module.exports.allergies = data.allergies;
      module.exports.name = data.name;
    }
  });
} catch (ex) {
  console.log(ex);
}

// try {
  
//   fs.writeFileSync(detailsFile, JSON.stringify(obj));
// }

// //Update user age in MongoDB
// module.exports.updateAge = function(newAge) {
//   dbUser.findOneAndUpdate(
//     { username: name},
//     { $set: { age: newAge } },
//     function(err) {
//       if (err) return console.error(err);
//     }
//   );
// };

// //Update user height in MongoDB
// module.exports.updateHeight = function(newHeight) {
//   dbUser.findOneAndUpdate(
//     { username: name},
//     { $set: { height: newHeight } },
//     function(err) {
//       if (err) return console.error(err);
//     }
//   );
// };
