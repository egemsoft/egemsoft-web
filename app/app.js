"use strict";

/**
 * Egem web app main module
 * Depends on indicated modules
 * @author Ismail Demirbilek
 */
angular.module('egem-web', ['egem.language', 'egem.config', 'ngRoute','ui.bootstrap', 'scrollSection']).
	// Route configuration
	app.config(['$routeProvider', function($routeProvider) {
	  $routeProvider.when('/', { });
	}]);
