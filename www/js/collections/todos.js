define([
	'underscore',
	'backbone',
	'models/todo'
], function (_, Backbone, Todo) {

	'use strict';

	var Todos = Backbone.Collection.extend({
		model: Todo,
		url: '/api/todos',

		initialize: function () {
			this.fetch();
		}
	});

	return Todos;

});