define([
	'underscore',
	'backbone'
], function (_, Backbone) {

	'use strict';

	var Todo = Backbone.Model.extend({
		idAttribute: "_id",
		urlRoot: '/api/todos'
	});

	return Todo;

});