define([
	'jquery',
	'underscore',
	'backbone'
], function ($, _, Backbone) {

	'use strict';

	var App = Backbone.Router.extend({
		routes: {
			'': 'home',
			'about': 'about'
		},

		initialize: function () {
			console.log('router init');
		},

		home: function () {
			console.log('home');

			require(['views/home/main'], function (HomeMainView) {
				var homeMainView = new HomeMainView();

				$('#content').html(homeMainView.render().el);
			});
		},

		about: function () {
			console.log('about');

			require(['views/about/main'], function (AboutMainView) {
				var aboutMainView = new AboutMainView();

				$('#content').html(aboutMainView.render().el);
			});
		}
	});

	return App;

});