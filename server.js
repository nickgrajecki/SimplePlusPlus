//Get all the necessary modules
var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var file = './config.json'

var app = express();
var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(express.static(__dirname));
app.set('view engine', 'ejs');

//Home page
app.get('/', function (req, res) {
  res.render('home');
});

//Module selection under settings redirect
app.get('/modules', function (req, res) {
  res.render('modules');
});

//Process module selection
app.post('/modules', urlencodedParser, function (req, res) {
  var firstaid = req.body.firstaidc;
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
  var obj = { firstaid: firstaid, video: video, presc: presc, hospital: hospital, diary: diary, nutrition: nutrition, symptom: symptom, emergency: emergency };
  console.log(obj);
  fs.writeFileSync(file, JSON.stringify(obj));
  res.render('modules');
})

//First aid module
app.get('/firstaid', function (req, res) {
  fs.readFile(__dirname + '/sp_modules/firstaid.html', 'utf8', function (err, html) {
    if (err) {
      throw err
    } else {
      // console.log(html)
      res.render('module', { content: html });
    }
  });
});

//Process firstaid module
app.post('/firstaid', urlencodedParser, function (req, res) {
  var detailsFile = './details.json'
  var name = req.body.username;
  var age = req.body.age;
  var height = req.body.userheight;
  var obj = { name: name, age: age, height: height };
  console.log(obj)
  fs.writeFileSync(detailsFile, JSON.stringify(obj));
  res.redirect('/firstaid');
});

app.listen(3000);