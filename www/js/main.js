require.config({
	//baseUrl: 'js',
	shim: {
		'backbone': {
			deps: ['underscore', 'jquery'],
			exports: 'Backbone'
		},
		'underscore': {
			exports: '_'
		},
		'bootstrap': {
			deps: ['jquery']
		}
	},
	paths: {
		jquery: 'lib/jquery',
		underscore: 'lib/underscore',
		backbone: 'lib/backbone',
		text: 'lib/text',
		templates: '../templates'
	},
	urlArgs: 'bust=' + (new Date()).getTime()
});

define(['jquery', 'underscore', 'backbone', 'app'], function ($, _, Backbone, App) {

	'use strict';

	var app = new App();
	Backbone.history.start();

});