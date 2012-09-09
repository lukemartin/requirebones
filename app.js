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

	

	// Routes
	app.get('/api', function (req, res) {
		res.send('API is running');
	});

	app.get('/api/contacts', function (req, res) {
		return ContactModel.find(function (err, contacts) {
			if (!err) {
				return res.send(contacts);
			} else {
				return console.log(err);
			}
		});
	});

	app.post('/api/contacts', function (req, res) {
		var contact;
		console.log("POST: ");
		console.log(req.body);
		contact = new ContactModel({
			name: req.body.name,
			phone: req.body.phone,
			client: req.body.client,
			supplier: req.body.supplier,
			comments: req.body.comments
		});

		contact.save(function (err) {
			if (!err) {
				return console.log('created');
			} else {
				return console.log(err);
			}
		});

		return res.send(contact);
	});

	app.listen(3000);

})();