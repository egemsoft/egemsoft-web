var MainCtrl = function($scope, $rootScope, $window, $route, $location, $q, $timeout, $window) {
	$scope.sections = ['about','products','references']; //html files to load (top.html, etc)
  $scope.loadedSections = [$scope.sections[0]]; //loaded html files
  
  $scope.$on('$routeChangeStart', function() {
  	// does roouted tpl exist?
  	if($scope.sections.indexOf($location.hash()) > -1) {
  		// is it loaded?
  		if($scope.loadedSections.indexOf($location.hash()) < 0) {
	  		for(i = $scope.loadedSections.length; i < $scope.sections.length; i++) {
	  			$scope.loadedSections.push($scope.sections[i]);
	  			if($location.hash() == $scope.sections[i])
	  				break;
	  		}
	  	}
  	}
	});

};