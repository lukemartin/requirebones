define([
	'jquery',
	'underscore',
	'backbone'
], function ($, _, Backbone) {

	'use strict';

	var App = Backbone.Router.extend({
		routes: {
			'': 'home'
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
		}
	});

	return App;

});