var fs = require('fs');
var modulesPick = JSON.parse(fs.readFileSync('config.json', 'utf8'));

var count; //count how many icons there are

module.exports.modulesPick = modulesPick;

console.log(modulesPick);