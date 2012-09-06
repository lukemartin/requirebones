define([
	'underscore',
	'backbone',
	'models/contact'
], function (_, Backbone, Contact) {

	'use strict';

	var ContactCollection = Backbone.Collection.extend({
		model: Contact,
		url: '/api/contacts',

		initialize: function () {
			/*
			this.fetch({
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
			});
*/
		}
	});

	return ContactCollection;

});