//Get all the necessary modules and basic configs
var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

var fs = require('fs');

//Set up view engine and render CSS/JS
app.use(express.static(__dirname));
app.set('view engine', 'ejs');

//Login
app.get('/', function (req, res) {
  res.render('login');
});

//Action after attempting to login
app.post('/', urlencodedParser, function (req, res) {
  require('./spp_modules/login')(req, res);
});

app.get('/index', function (req, res) {
  res.render('home', { name: 'Nick' });
});

//Module selection under settings redirect
app.get('/modules', function (req, res) {
  res.render('modules', { name: 'Nick' });
});

//Process module selection
app.post('/modules', urlencodedParser, function (req, res) {
  require('./spp_modules/moduleselect')(req);
  res.render('modules', { name: 'Nick' });
})

//First aid module
app.get('/firstaid', function (req, res) {
  fs.readFile(__dirname + '/sp_modules/firstaid/main.html', 'utf8', function (err, html) {
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
  require('./sp_modules/firstaid/firstaidnode')(req, res);
});

//Port
app.listen(3000);