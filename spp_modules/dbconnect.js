var mongoose = require('mongoose');
mongoose.connect('mongodb://admin:insert-pass@ds161700.mlab.com:61700/simpleplus');
var userSchema = new mongoose.Schema({
    name: String,
    age: String,
    height: String
});
var dbUser = mongoose.model('User', userSchema);
var find = function (name){
    
}

module.exports.user = dbUser;
module.exports.schema = userSchema;
module.exports.find = find;