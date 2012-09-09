define([
	'jquery',
	'underscore',
	'backbone',
	'transitions',
	'views/misc/navItems'
], function ($, _, Backbone, Transitions, NavItemsView) {

	'use strict';

	var App = Backbone.Router.extend({

		routes: {
			'': 'home',
			'about': 'about'
		},

		initialize: function () {
			console.log('router init');
			this.transitions = new Transitions();
			this.navItemsView = new NavItemsView();
			$('#nav').html(this.navItemsView.render().el);
		},

		home: function () {
			console.log('home');
			var self = this;

			require(['views/home/main'], function (HomeMainView) {
				var homeMainView = new HomeMainView();

				self.transitions.alpha(homeMainView.render().el, function () {
					var bob = new Transitions($('h1'));
					//bob.slide('Welcome!');
				});
			});
			this.navItemsView.select('home');
		},

		about: function () {
			console.log('about');
			var self = this;

			require(['views/about/main'], function (AboutMainView) {
				var aboutMainView = new AboutMainView();

				self.transitions.slide(aboutMainView.render().el);
			});
			this.navItemsView.select('about');
		}

	});

	return App;

});