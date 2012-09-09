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

		initialize: function () {
		},

		render: function () {
			var template = Handlebars.compile(todoTemplate);

			$(this.el).html(template(this.model.toJSON()));

			return this;
		}
	});

	return TodoView;

});