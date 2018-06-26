var fs = require('fs');
var detailsFile = './localfiles/details.json';

try {
    fs.readFile(detailsFile, function (err, data) {
        if (err) throw err;
        if (data.length){
        data = JSON.parse(data);
        module.exports.name = data.name;
        }
    });
} catch (ex) {
    console.log(ex);
}

