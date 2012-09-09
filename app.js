/*global __dirname: true*/

(function () {
	'use strict';

	var application_root = __dirname,
		express = require('express'),
		path = require('path'),
		mongoose = require('mongoose');

	var app = express();

	// Database
	mongoose.connect('mongodb://localhost:27017/requirebones');

	// Config
	app.configure(function () {
		app.use(express.bodyParser());
		app.use(express.methodOverride());
		app.use(app.router);
		app.use(express.static(path.join(application_root, 'www')));
		app.use(express.errorHandler({ dumpExceptions: true, showStack: true}));
	});

	// Schema
	var Schema = mongoose.Schema;

	var Todo = new Schema({
		title: { type: String, required: true },
		complete: { type: Boolean, default: false },
		destroyed: { type: Boolean, default: false },
		modified: { type: Date, default: Date.now }
	});

	var TodoModel = mongoose.model('Todo', Todo);

	// Routes
	app.get('/api', function (req, res) {
		res.send('API is running');
	});

	app.get('/api/todos', function (req, res) {
		return TodoModel.find(function (err, todos) {
			if (!err) {
				return res.send(todos);
			} else {
				return console.log(err);
			}
		});
	});

	app.post('/api/todos', function (req, res) {
		var todo;
		console.log("POST: ");
		console.log(req.body);
		todo = new TodoModel({
			title: req.body.title,
			complete: req.body.complete
		});

		todo.save(function (err) {
			if (!err) {
				return console.log('created');
			} else {
				return console.log(err);
			}
		});

		return res.send(todo);
	});

	app.listen(3000);

})();