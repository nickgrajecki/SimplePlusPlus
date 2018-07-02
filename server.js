//Get all the necessary modules and basic configs
var express = require('express');
var app = express();
var path = require('path');

var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

var fs = require('fs');
var details = require('./spp_modules/userDetails');

//Set up view engine and render CSS/JS
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(__dirname));
app.set('view engine', 'ejs');

//Action after attempting to login
app.post('/', urlencodedParser, function (req, res) {
  require('./spp_modules/login')(req, res);
});

//Login
app.get('/', function (req, res) {
  if (details.name == undefined) {
    res.render('login');
  } else {
    res.render('home', { name: details.name});
  }
});

app.get('/index', function (req, res) {
  res.render('home', { name: details.name });
});

app.get('/settings', function (req, res) {
  res.render('settings', { name: details.name });
});

app.get('/support', function (req, res) {
  res.render('support', { name: details.name });
});

app.get('/feedback', function (req, res) {
  res.render('feedback', { name: details.name });
});

//Module selection under settings redirect
app.get('/modules', function (req, res) {
  res.render('modules', { name: details.name });
});

//Process module selection
app.post('/modules', urlencodedParser, function (req, res) {
  require(__dirname + '/spp_modules/moduleSelect')(req);
  res.render('modules', { name: details.name });
})

//First aid module
app.get('/firstaid', function (req, res) {
  fs.readFile(__dirname + '/external_modules/firstaid/main.html', 'utf8', function (err, html) {
    if (err) {
      throw err
    } else {
      res.render('module', { content: html, name: details.name });
    }
  });
});

//Process firstaid module
app.post('/firstaid', urlencodedParser, function (req, res) {
  require('./external_modules/firstaid/firstaidnode')(req, res);
});

app.get('/nutrition', function (req, res) {
  fs.readFile(__dirname + '/external_modules/nutrition/main.ejs', 'utf8', function (err, html) {
    if (err) {
      throw err
    } else {
      res.render('module', { content: html, name: details.name, foods: 'Arbuz' });
    }
  });
});

app.post('/nutrition', urlencodedParser, function (req, res) {
  require('./external_modules/nutrition/nutritionnode')(req, res);
});

//Port
app.listen(process.env.PORT || 3000);