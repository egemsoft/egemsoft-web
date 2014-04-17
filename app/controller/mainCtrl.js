var MainCtrl = function($scope, $rootScope, $window, $route, $location, $q, $timeout, $window) {
	$scope.sections = ['about','services','contact']; //html files to load (top.html, etc)
  $scope.loadedSections = [$scope.sections[0]]; //loaded html files
  $scope.year = new Date().getFullYear();

  $scope.setHash = function(hash) {
  	$location.hash(hash);
  };
  
  $scope.$on('$routeChangeStart', function() {
  	// does roouted tpl exist?
  	if($scope.sections.indexOf($location.hash()) > -1) {
  		$scope.activeSection = $location.hash();
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