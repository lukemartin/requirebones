define([
	'jquery',
	'underscore',
	'backbone',
	'handlebars',
	'text!templates/todo.html'
], function ($, _, Backbone, Handlebars, todoTemplate) {

	'use strict';

	var TodoView = Backbone.View.extend({
		tagName: 'li',

		events: {
			'click .todo-remove': 'destroy'
		},

		initialize: function () {
			this.model.bind('destroy', this.remove, this);
		},

		render: function () {
			var template = Handlebars.compile(todoTemplate);

			$(this.el).html(template(this.model.toJSON()));

			return this;
		},

		remove: function () {
			$(this.el).remove();
		},

		destroy: function () {
			this.model.destroy();
		}
	});

	return TodoView;

});