define([
	'jquery',
	'underscore',
	'backbone'
], function ($, _, Backbone) {

	'use strict';

	var HomeMainView = Backbone.View.extend({

		initialize: function () {
			console.log('home main view init');
		}
	});

	return HomeMainView;

});