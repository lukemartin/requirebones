define([
	'underscore',
	'backbone'
], function (_, Backbone) {

	'use strict';

	var Contact = Backbone.Model.extend({
		urlRoot: '/api/contacts'
	});

	return Contact;

});