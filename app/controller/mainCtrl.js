var MainCtrl = function($scope, $location, $route, $config, $language, $anchorScroll) {
	$scope.config = $config;
  $scope.sections = $scope.config.sections; // html files to load
  $scope.loadedSections = [$scope.sections[0]]; //loaded html files
  $scope.year = new Date().getFullYear();

  $scope.languages = $language.availableLanguages;
  $scope.language = $language.availableLanguages[0];

  $scope.setLanguage = function(language) {
  	$scope.language = language;
  	// scroll to current section, text sizes may differentiate for locales.
  	$anchorScroll();
  };

  $scope.locale = function(key) {
  	return $language.strings[key][$scope.language.key];
  };

  $scope.$on('$routeChangeStart', function() {
		$scope.activeSection = $location.hash();
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
