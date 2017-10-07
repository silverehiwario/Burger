var express = require('express');
var router = express.Router();
var queries = require('../models/burger.js');
var path = require("path");



router.get('/', function (req, res) {
    queries.show(function(data){
        //console.log(data);
        var data1 = {
            burgerData: data
        }
        //res.render('index', {data : data});
        res.render('index', data1);
    });
});

router.post('/create', function (req, res) {
    queries.add(req.body.item, function(data) {
        res.redirect('/');
    });
});

router.post('/update/:id', function (req, res) {
    queries.devoured(req.params.id, function(data) {
        res.redirect('/');
    });
});

router.get("/burger_style", function(req, res) {
  // var http = fs.readFileSync("./index.html");
  res.sendFile(path.join(__dirname,"../Public/assets/CSS/burger_style.css"));
});

router.get("/burger", function(req, res) {
  // var http = fs.readFileSync("./index.html");
  res.sendFile(path.join(__dirname,"../Public/assets/IMG/burger.jpg"));
});

module.exports = router;