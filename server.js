
var bodyParser = require('body-parser');
var express = require("express");
var methodOveride = require('method-override');


var app = express();
//app.use(express.static(__dirname + '/public'));

var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({extended: false}));
 
// override with POST having ?_method=DELETE
app.use(methodOveride('_method'))

var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);

app.listen(PORT, function() {
  console.log("Listening at %s", PORT);
});

