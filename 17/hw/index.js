function coffeMachine(coffeeName, cb) {
	setTimeout(function() { 
		var data = 'Your coffee is done -> ' + coffeeName;
		setTimeout(function() {
			return cb(data + 'Milk')
		}, 1000)
	}, 1000)
}
var coffeeName = 'Jacoms';
var a = coffeMachine(coffeeName, function(data) {
		console.log(data);
});

