define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/home/main.html'
], function ($, _, Backbone, homeMainTemplate) {

	'use strict';

	var HomeMainView = Backbone.View.extend({

		initialize: function () {
			console.log('home main view init');
		},

		render: function () {
			$(this.el).html(homeMainTemplate);
			
			return this;
		}
	});

	return HomeMainView;

});