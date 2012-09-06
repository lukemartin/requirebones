define([
	'jquery',
	'underscore',
	'backbone',
	'views/home/contactsList',
	'text!templates/home/main.html'
], function ($, _, Backbone, ContactsListView, homeMainTemplate) {

	'use strict';

	var HomeMainView = Backbone.View.extend({

		initialize: function () {
			console.log('home main view init');
		},

		render: function () {
			var contactsList = new ContactsListView();
			$(this.el).html(homeMainTemplate).append(contactsList.render().el);
			return this;
		}
	});

	return HomeMainView;

});