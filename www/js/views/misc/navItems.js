define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/misc/navItems.html'
], function ($, _, Backbone, navItemsTemplate) {

	'use strict';

	var NavItemsView = Backbone.View.extend({

		tagName: 'ul',
		className: 'nav',

		initialize: function () {
			console.log('nav items view init');
		},

		render: function () {
			$(this.el).html(navItemsTemplate);
			
			return this;
		},

		select: function (item) {
			$('#nav li').removeClass('active').siblings('[data-nav-item=' + item + ']').addClass('active');
		}

	});

	return NavItemsView;

});