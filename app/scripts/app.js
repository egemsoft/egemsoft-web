'use strict';

/**
 * Egem web app main module
 * Depends on indicated modules
 * @function
 * @author Ismail Demirbilek
 */
angular
  .module('egemsoftWebApp', [
    'ngRoute',
    'scrollSectionLoader',
    'angular-markdown'
  ])
  // Route configuration
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'views/home.html'
    });
    // standalone pages routing
    $routeProvider.when('/page/:pageName', {
      templateUrl: 'views/page.html'
    });
  }]);
