define([
	'jquery',
	'underscore',
	'backbone',
	'transitions'
], function ($, _, Backbone, Transitions) {

	'use strict';

	var App = Backbone.Router.extend({
		routes: {
			'': 'home',
			'about': 'about'
		},

		initialize: function () {
			console.log('router init');
			this.transitions = new Transitions();
		},

		home: function () {
			console.log('home');
			var self = this;

			require(['views/home/main'], function (HomeMainView) {
				var homeMainView = new HomeMainView();

				self.transitions.alpha(homeMainView.render().el, function () {
					var bob = new Transitions($('h1'));
					bob.slide('Welcome!');
				});

			});
		},

		about: function () {
			console.log('about');
			var self = this;

			require(['views/about/main'], function (AboutMainView) {
				var aboutMainView = new AboutMainView();

				self.transitions.slide(aboutMainView.render().el);
			});
		}
	});

	return App;

});