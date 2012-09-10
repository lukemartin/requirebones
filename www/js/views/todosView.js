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

		events: {
			'click #todo-add': 'create'
		},

		initialize: function () {
			this.todos = new Todos();
			this.todos.bind('reset', this.addAll, this);
			this.todos.bind('add', this.addOne, this);
		},

		render: function () {
			$(this.el).html(todosTemplate);

			return this;
		},

		create: function (e) {
			e.preventDefault();
			var title = $('#todo-title').val();
			// temp validation
			if (!title) {
				return false;
			}

			this.todos.create({title: title});
			$('#todo-title').val('');
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