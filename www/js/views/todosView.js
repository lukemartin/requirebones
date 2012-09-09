define([
	'jquery',
	'underscore',
	'backbone',
	'handlebars',
	'text!templates/todos.html',
	'views/todoView',
	'collections/todos'
], function ($, _, Backbone, Handlebars, todosTemplate, TodoView, Todos) {

	'use strict';

	var TodosView = Backbone.View.extend({

		initialize: function () {
			this.todos = new Todos();
			this.todos.bind('reset', this.addAll, this);
		},

		render: function () {
			$(this.el).html(todosTemplate);

			return this;
		},

		addAll: function () {
			//this.todos.each(this.addOne);
			var self = this;
			_.each(this.todos.models, function (model) {
				self.addOne(model);
			});
		},

		addOne: function (todo) {
			var todoView = new TodoView({model: todo});

			$(this.el).find('#todos').append(todoView.render().el);
		}
	});

	return TodosView;

});