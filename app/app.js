"use strict";

/**
 * Egem web app main module
 * Depends on indicated modules
 * @author Ismail Demirbilek
 */
angular.module('egem-web', ['egem.language', 'egem.config', 'ngRoute','ui.bootstrap', 'scrollSectionLoader', 'btford.markdown']).
	// Route configuration
	config(['$routeProvider', function($routeProvider) {
	  $routeProvider.when('/', {
	  	templateUrl: '/layout/home.html'
	  });
	  // standalone pages routing
	  $routeProvider.when('/page/:pageName', {
	  	templateUrl: '/layout/page.html'
	  });
	}]);