var app = angular.module('egem-web',['egem-language', 'ngRoute','ui.bootstrap', 'scrollSection']);

// Route configuration
app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', { });
}]);
