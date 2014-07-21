'use strict';

/**
 * @ngdoc overview
 * @name egemsoftWebApp
 * @requires ngRoute
 * @requires scrollSectionLoader
 * @requires angular-markdown
 * @description
 * Egemsoft web app main module.
 * Depends on indicated modules.
 * @author Ismail Demirbilek
 * @function
 */
angular
  .module('egemsoftWebApp', [
    'ngRoute',
    'scrollSectionLoader'
  ])
  // Route configuration
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'views/home.html',
      controller: 'HomeCtrl'
    });
    // standalone pages routing
    $routeProvider.when('/page/:pageName', {
      templateUrl: 'views/page.html',
      controller: 'PageCtrl'
    });
  }]);
