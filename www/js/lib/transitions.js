define([
	'jquery'
], function ($) {

	'use strict';

	var Transitions = function ($el) {

		$el = $el || $('#content');

		function alpha(html, callback) {
			$el.fadeOut(125, function () {
				$(this).html(html).fadeIn(125, function () {
					if (typeof callback === 'function') {
						callback();
					}
				});
			});
		}

		function slide(html, callback) {
			$el.slideUp(125, function () {
				$(this).html(html).slideDown(125, function () {
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