"use strict";

/**
 * Egem web app main module
 * Depends on indicated modules
 * @function
 * @author Ismail Demirbilek
 */
var egemApp = angular.module('egem-web', ['egem.language', 'egem.config', 'ngRoute','ui.bootstrap', 'scrollSectionLoader', 'angular-markdown']).
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

/**
 * Service factory to store active page between controllers
 * Initial value is 'home'
 * @function
 * @author Ismail Demirbilek
 */
egemApp.factory('$activePage', function() {
	var activePage = 'home';
	var observerCallbacks = [];
	var activePageService = {};
  
  /**
	 * Set method for active page variable.
	 * @param {string} page - Active page to define on service.
	 * @function
	 */
  activePageService.set = function(page) {
		activePage = page;
		// call registered observers
		angular.forEach(observerCallbacks, function(callback){
      callback();
    });
	};

	/**
	 * Get method for active page variable.
	 * @return {string} - Active page defined on service.
	 * @function
	 */
	activePageService.get = function() {
		return activePage;
	};

	/**
	 * Registers callback to observe changes on service
	 * @param {function} callback - Observer callback function
	 * @function
	 */
	activePageService.registerObserverCallback = function(callback) {
		observerCallbacks.push(callback);
	};

	return activePageService;

});