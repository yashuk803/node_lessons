var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

var courses = [
	{
		id:1,
		name: 'JAvaScript'
	},
	{
		id:2,
		name: 'node'
	},
	{
		id:3,
		name: 'Angular'
	},
];



app.get('/', function (req, res) {
  res.send('Hello World!');
});


// Get all course
app.get('/api/courses', function (req, res) {
	res.send(courses)
})

app.get('/api/courses/:id', function(req, res) {
	
	var course = courses.find(function(course) {
		return course.id === parseInt(req.params.id);
	});

	res.send(course);
});

app.post('/api/courses', function(req, res) {
		var course = {
			//id: Date.now(),
			id: courses.length + 1,
			name: req.body.name,
		}
		courses.push(course);
		res.send(courses);

})

app.put('/api/courses/:id', function(req, res) {
	var course = courses.find(function (course) {
		return course.id === parseInt(req.params.id)
	});
	course.name = req.body.name;
	res.send(course);
})

app.delete('/api/courses/:id', function(req, res) {
	courses = courses.filter(function (course) {
		return course.id !== parseInt(req.params.id);
	});
	res.sendStatus(200);
})



app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

