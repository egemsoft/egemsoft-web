'use strict';

/**
 * @ngdoc controller
 * @name egemsoftWebApp.controller:PageCtrl
 * @requires $scope
 * @requires $route
 * @requires $routeParams
 * @requires activePage
 * @description
 * Controller for standalone pages. 
 * @author Ismail Demirbilek
 * @function
 */
angular.module('egemsoftWebApp')
   .controller('PageCtrl', function($scope, $route, $routeParams, activePage) {
     $scope.page = $routeParams.pageName;

     $scope.$on('$routeChangeSuccess', function() {
       activePage.set('services');
     });
  });