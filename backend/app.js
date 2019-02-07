var express = require("express")
var app = express();
var bodyParser = require("body-parser");
var mongoose = require('mongoose');

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req,res){
	res.send("Welcome to Kabobs");
});

app.listen(3000,function(){
	console.log("The YelpCamp Server Has Started!");
});
