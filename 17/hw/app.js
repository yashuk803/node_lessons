var request = require('request');
var app = require('express')();

app.get('/', function(req, res) {
request('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3', function(error, response, body) {
	res.send(body)
})

}).listen(3000, function() {
	console.log('Server at http://localhost:3000/');
})

