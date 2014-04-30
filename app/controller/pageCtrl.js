var PageCtrl = function($scope, $route, $routeParams, $activePage) {
	$scope.page = $routeParams.pageName;

	$scope.$on('$routeChangeSuccess', function() {
		$activePage.set('services');
	});
}