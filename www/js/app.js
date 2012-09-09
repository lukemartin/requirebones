define([
	'jquery',
	'underscore',
	'backbone',
	'transitions'
], function ($, _, Backbone, Transitions) {

	'use strict';

	var App = Backbone.Router.extend({

		routes: {
			'': 'viewTodos'
		},

		initialize: function () {
			this.transitions = new Transitions();
		},

		viewTodos: function () {
			var self = this;

			require(['views/todosView'], function (TodosView) {
				var todosView = new TodosView();

				self.transitions.alpha(todosView.render().el);
			});
		}

	});

	return App;

});