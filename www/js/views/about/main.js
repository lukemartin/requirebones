define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/about/main.html'
], function ($, _, Backbone, aboutMainTemplate) {

	'use strict';

	var AboutMainView = Backbone.View.extend({

		initialize: function () {
			console.log('about main view init');
		},

		render: function () {
			$(this.el).html(aboutMainTemplate);
			
			return this;
		}
	});

	return AboutMainView;

});