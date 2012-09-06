define([
	'jquery',
	'underscore',
	'backbone',
	'models/contactCollection',
	'text!templates/home/contactsListItem.html'
], function ($, _, Backbone, ContactCollection, contactsListItemTemplate) {

	'use strict';

	var ContactsListView = Backbone.View.extend({
		tagName: 'ul',
		className: 'contacts',

		render: function () {
			this.collection = new ContactCollection();
			this.collection.fetch({
				success: function (data) {
					console.log(data);

					_.each(data.models, function(model) {
						console.log(model);
						console.log(model.get('name'))
					});
				},
				error: function () {
					console.log('no');
				}
			})
			
			return this;
		},

		renderItem: function (model) {
			$(this.el).append('<li>Woof</li>');
		}
	});

	return ContactsListView;

});