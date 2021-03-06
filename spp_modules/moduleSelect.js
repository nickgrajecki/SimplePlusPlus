var fs = require('fs');
var file = './localfiles/selectedmodules.json';

//Export module selection
module.exports = function (req) {
    //Read user selection
    var firstaid = req.body.firstaidc;
    //If checked
    if (firstaid === "on") {
        firstaid = true;
    } else {
        firstaid = false;
    }
    var video = req.body.videoc;
    if (video === "on") {
        video = true;
    } else {
        video = false;
    }

    var presc = req.body.prescc;
    if (presc === "on") {
        presc = true;
    } else {
        presc = false;
    }

    var hospital = req.body.hospitalc;
    if (hospital === "on") {
        hospital = true;
    } else {
        hospital = false;
    }

    var diary = req.body.diaryc;
    if (diary === "on") {
        diary = true;
    } else {
        diary = false;
    }
    var nutrition = req.body.nutritionc;
    if (nutrition === "on") {
        nutrition = true;
    } else {
        nutrition = false;
    }
    var symptom = req.body.symptomc;
    if (symptom === "on") {
        symptom = true;
    } else {
        symptom = false;
    }
    var emergency = req.body.emergencyc;
    if (emergency === "on") {
        emergency = true;
    } else {
        emergency = false;
    }
    //Create new JSON object 
    var obj = { firstaid: firstaid, video: video, presc: presc, hospital: hospital, diary: diary, nutrition: nutrition, symptom: symptom, emergency: emergency };
    //Save it to file
    fs.writeFileSync(file, JSON.stringify(obj));
    console.log(obj);
}

