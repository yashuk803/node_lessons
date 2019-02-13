/*var app  = require('express')();
var http = require('http').Server(app);


app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html');
})

http.listen(3000, function(){
	console.log('Server at localhost:3000');
})
*/


/*var app  = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html');
})
//Когда пользователь присоединился
io.on('connection', function(socket){
	console.log('A user connected');
	// Выполнится при отсоединениии пользователя
	socket.on('disconnect', function(){
		console.log('A user disconnect');
	})
})

http.listen(3000, function(){
	console.log('Server at localhost:3000');
})*/

/*var app  = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html');
})
//Когда пользователь присоединился
io.on('connection', function(socket){
	console.log('A user connected');
	setTimeout(function() {
		socket.send('Sent a message 2 seconds after connection!');
	}, 2000);


	// Выполнится при отсоединениии пользователя
	socket.on('disconnect', function(){
		console.log('A user disconnect');
	})
})

http.listen(3000, function(){
	console.log('Server at localhost:3000');
})*/

/*var app  = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html');
})

io.on('connection', function(socket){
	console.log('A user connected');
	setTimeout(function() {
		socket.emit('myEvent', {description: 'User event from server'});
	}, 2000);

	// Выполнится при отсоединениии пользователя
	socket.on('disconnect', function(){
		console.log('A user disconnect');
	})
})
http.listen(3000, function(){
	console.log('Server at localhost:3000');
})*/
/*var app  = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html');
})

io.on('connection', function(socket) {
	socket.on('clientEvent', function(data){
		console.log(data)
	})
	
})
http.listen(3000, function(){
	console.log('Server at localhost:3000');
})*/

var app  = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html');
})

io.on('connection', function(socket) {
	socket.on('clientEvent', function(data){
		console.log(data)
	})
	
})
http.listen(3000, function(){
	console.log('Server at localhost:3000');
})