var fs = require('fs');
var file = './localfiles/config.json';


module.exports = function (req) {

    //Read user selection
    var sound = req.body.soundchoice;
    var animation = req.body.animationchoice;
    //If checked
    if (sound === "on") {
        sound = true;
    } else {
        sound = false;
    }

    if (animation === "on") {
        animation = true;
    } else {
        animation = false;
    }
   
    //Create new JSON object 
    var obj = { sound: sound, animation: animation };
    //Save it to file
    fs.writeFileSync(file, JSON.stringify(obj));
    console.log(obj);
}

