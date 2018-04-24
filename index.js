var express = require("express");
var bodyParser = require("body-parser");
var uuid5 = require("uuid5");

var app = express();                 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.listen(3000, function() {
	console.log('REST Server running on port 3000');
});

app.get('/', function(req, res) {
	var result = {};
	result.message = 'RightCarbo Rest Server';
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader('Content-Type', 'application/json');
	res.send(JSON.stringify(result, null, 4));
});

app.get('/uuid', function(req,res) {
	var result = {};
	if (req.query.id) {
		result.uuid5 = uuid5(req.query.id);
	} else {
		result.uuid5 = "no data-feed, path?id=...";
	}
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader('Content-Type', 'application/json');
	res.send(JSON.stringify(result, null, 4));

});

app.get('/uuidhr', function(req,res) {
	var result = {};
	if (req.query.id) {
		result.uuid5 = uuid5(req.query.id+"|"+process.hrtime());
	} else {
		result.uuid5 = "no data-feed, path?id=...";
	}
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader('Content-Type', 'application/json');
	res.send(JSON.stringify(result, null, 4));
});