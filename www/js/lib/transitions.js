define([
	'jquery'
], function ($) {

	'use strict';

	var Transitions = function ($el) {

		$el = $el || $('#content');

		function alpha(html, callback) {
			$el.fadeOut(250, function () {
				$(this).html(html).fadeIn(250, function () {
					if (typeof callback === 'function') {
						callback();
					}
				});
			});
		}

		function slide(html, callback) {
			$el.slideUp(250, function () {
				$(this).html(html).slideDown(250, function () {
					if (typeof callback === 'function') {
						callback();
					}
				});
			});
		}

		return {
			alpha: alpha,
			slide: slide
		};
		
	};

	return Transitions;

});