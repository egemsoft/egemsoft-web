var MainCtrl = function($scope, $rootScope, $window, $route, $location, $q, $timeout, $window, $language) {
	$scope.sections = ['about','services','contact']; //html files to load (top.html, etc)
  $scope.loadedSections = [$scope.sections[0]]; //loaded html files
  $scope.year = new Date().getFullYear();

  console.log($language);

  $scope.config = {
  	languages: [{key: 'tr', label: 'Türkçe'}, {key:'en', label: 'English'}]
  };

  $scope.language = $scope.config.languages[0];

  $scope.setLanguage = function(language) {
  	$scope.language = language;
  };

  $scope.setHash = function(hash) {
  	$location.hash(hash);
  };

  $scope.locale = function(string) {
  	return $language[string][$scope.language.key];
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