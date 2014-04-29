var MainCtrl = function($scope, $location, $route, $config, $language, $anchorScroll, $window, $timeout) {
	$scope.config = $config;
  $scope.sections = $scope.config.sections; // html files to load
  $scope.loadedSections = [$scope.sections[0]]; //loaded html files
  $scope.window = $window;
  $scope.year = new Date().getFullYear();

  $scope.languages = $language.availableLanguages;
  $scope.language = $language.availableLanguages[0];


  $scope.slides = $config.home[$scope.language.key].slides;
  var blocks = $config.home[$scope.language.key].blocks;
  var blocksSlides = [];
  var blockSlidesSize = Math.ceil(blocks.length/$config.home.blocksPerSlide);

  for(i=0; i<blockSlidesSize; i++) {
    blocksSlides.push(blocks.slice(i*$config.home.blocksPerSlide, i*$config.home.blocksPerSlide + $config.home.blocksPerSlide));
  }

  console.log(blocksSlides);
  $scope.blocksSlides = blocksSlides;

  $scope.setLanguage = function(language) {
  	$scope.language = language;
    $scope.slides = $config.home[$scope.language.key].slides;
    $scope.blocks = $config.home[$scope.language.key].blocks;

  	// scroll to current section, text sizes may differentiate for locales.
  	$anchorScroll();
  };

  $scope.locale = function(key) {
  	return $language.strings[key][$scope.language.key];
  };

  $scope.$on('$routeChangeStart', function() {
    $scope.activePage = $location.path();
		$scope.activeSection = $location.hash();
  	// does routed tpl exist?
  	if($scope.sections.indexOf($location.hash()) > -1) {
      console.log($scope.sections.indexOf($location.hash()), $location.hash(), $scope.loadedSections.indexOf($location.hash()));
  		// is it loaded?
  		if($scope.loadedSections.indexOf($location.hash()) == -1) {
	  		for(i = $scope.loadedSections.length; i < $scope.sections.length; i++) {
          console.log($scope.sections[i], i);
	  			$scope.loadedSections.push($scope.sections[i]);
	  			if($location.hash() == $scope.sections[i])
	  				break;
	  		}
	  	}
      // do anchor scroll if default scroll won't work
      $timeout($anchorScroll, 500);
  	}
	});
};
