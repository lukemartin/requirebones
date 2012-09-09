define([
	'underscore',
	'backbone'
], function (_, Backbone) {

	'use strict';

	var Todo = Backbone.Model.extend({
		urlRoot: '/api/todos'
	});

	return Todo;

});