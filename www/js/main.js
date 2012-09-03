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
		templates: '../templates',
	},
	urlArgs: 'bust=' + (new Date()).getTime()
});

define(['app'], function() {

});