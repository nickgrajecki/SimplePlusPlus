var fs = require('fs');
var path = require('path');
var detailsFile = './details.json';

var name = fs.readFile(detailsFile, function (err, data) {
    if (err) throw err;
    console.log(data.name);
    //console.log(detailsFile);
    return data.name;
});

//console.log(name);
module.exports.name = name;