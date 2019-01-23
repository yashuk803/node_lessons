/*console.log(__dirname);
console.log(__filename);*/
/*var Event = require('events');
var count = 0;


var print = function() {
	count++;
	console.log('Click', count);
}

var em = new Event();
em.on('click', print);
em.addListener('click', print);
em.once('click', print);

em.emit('click');
em.emit('click');
//em.emit('click');

//em.emit('click');
//em.emit('click');
//em.emit('click');*/

/*var Event = require('events').EventEmitter;

var emt = new Event();

emt.on('event', function() {
	setTimeout(function() {
		console.log('Listener 1');
	}, 0);
	
});

emt.on('event', function() {
	setImmediate(function() {
		console.log('Listener 2');
	})
});

emt.on('event', function() {
	console.log('Listener 3');
});

emt.emit('event');*/


// [3, 4] => [1-async, 2-async] - js


var Event = require('events').EventEmitter;
var emt = new Event();

/*emt.on('myEvent', function(a, b) {
	console.log('Arguments', arguments.length);
	console.log('Params', arguments.callee.length);
	console.log(a, b);
});
*/

emt.on('myEvent', function(data) {
    console.log(data.name.toUpperCase());
    console.log(data.code.toLowerCase());
});

var user = {
	name: 'Adam',
	code: 'DGE34G'
};


emt.emit('myEvent', user);

//JShint, code style google js