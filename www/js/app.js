define([
	'jquery',
	'underscore',
	'backbone',
	'transitions'
], function ($, _, Backbone, Transitions, NavItemsView) {

	'use strict';

	var App = Backbone.Router.extend({

		routes: {
			'': 'home'
		},

		initialize: function () {

		},

		home: function () {
			
		}

	});

	return App;

});