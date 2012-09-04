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

	app.get('/api', function (req, res) {
		res.send('API is running');
	});

	app.listen(3000);

})();