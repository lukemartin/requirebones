define([
	'jquery',
	'underscore',
	'backbone',
	'handlebars',
	'text!templates/todos.html',
	'views/todoView'
], function ($, _, Backbone, Handlebars, todosTemplate, TodoView) {

	'use strict';

	var TodosView = Backbone.View.extend({

		initialize: function () {
		},

		render: function () {
			$(this.el).html(todosTemplate);

			var cat = new TodoView();
			$(this.el).find('#todos').html(cat.render().el);

			return this;
		}
	});

	return TodosView;

});