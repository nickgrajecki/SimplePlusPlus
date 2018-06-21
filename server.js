var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');

var app = express();
var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(express.static(__dirname));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
  var data = JSON.parse(decodeURI(fs.readFileSync('config.json', 'utf8')));
  res.render('home', {data: data});
});

app.get('/:name', function(req, res){
  var data = {age: 29, job: 'ninja', hobby: ['eating', 'fighting', 'fooding']};
  res.render('module', {name: req.params.name, data: data});
});

app.post('/feedback', urlencodedParser, function(req, res){
  res.render('module', {name: req.params.name, data: data});
})

app.listen(3000);

