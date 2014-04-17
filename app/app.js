"use strict";

/**
 * Egem web app main module
 * Depends on indicated modules
 * @author Ismail Demirbilek
 */
angular.module('egem-web', ['egem.language', 'egem.config', 'ngRoute','ui.bootstrap', 'scrollSectionLoader']).
	// Route configuration
	config(['$routeProvider', function($routeProvider) {
	  $routeProvider.when('/', { });
	}]);
