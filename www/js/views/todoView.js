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
			$(this.el).html(todoTemplate);

			return this;
		}
	});

	return TodoView;

});