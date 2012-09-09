define([
	'jquery',
	'underscore',
	'backbone',
	'views/home/contactsList',
	'text!templates/home/main.html'
], function ($, _, Backbone, ContactsListView, homeMainTemplate) {

	'use strict';

	var HomeMainView = Backbone.View.extend({

		events: {
			//'click #add-contact': 'addContactHandler'
		},

		initialize: function () {
			console.log('home main view init');
			//_.bindAll(this, 'addContactHandler', 'addContact');
		},

		render: function () {
			this.contactsList = new ContactsListView();

			$(this.el).html(homeMainTemplate).append(this.contactsList.render().el);
			return this;
		}
	});

	return HomeMainView;

});