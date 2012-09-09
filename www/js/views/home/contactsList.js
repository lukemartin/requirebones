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

		initialize: function () {
			this.collection = new ContactCollection();
			this.collection.bind('all', this.addAll, this);
			
		},

		addContact: function() {
			console.log('ok')
		},

		addAll: function () {
			var self = this;

			_.each(this.collection.models, function (model) {
				$(self.el).append(self.renderItem(model));
			});
			/*
			this.collection.fetch({
				success: function (data) {
					_.each(data.models, function (model) {
						$(self.el).append(_.template(contactsListItemTemplate, model.toJSON()));
					});
				},
				error: function () {
					console.log('no');
				}
			});
*/
			
			return this;
		},

		renderItem: function (model) {
			return _.template(contactsListItemTemplate, model.toJSON());
		}
	});

	return ContactsListView;

});