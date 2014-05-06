/**
 * Home page controller.
 * Constructs dynamic objects on home page. Provides lazy loading of sections, etc.
 * @function
 */
var HomeCtrl = function($scope, $location, $route, $config, $activePage, $anchorScroll, $timeout, $q) {

  // Main slides
  $scope.slides = $config.home[$scope.language.key].slides;
  $scope.slides[0].active = true;

  var blocks = $config.home[$scope.language.key].blocks;
  var blocksSlides = [];
  
  // Blocks slides configuration, creates items in slide with defined item numbers per slide
  var blockSlidesSize = Math.ceil(blocks.length/$config.home.blocksPerSlide);

  for(i=0; i<blockSlidesSize; i++) {
    blocksSlides.push(blocks.slice(i*$config.home.blocksPerSlide, i*$config.home.blocksPerSlide + $config.home.blocksPerSlide));
  }
  blocksSlides[0].active = true;
  $scope.blocksSlides = blocksSlides;

  $scope.placeMap = function() {
    if(ymapsApi==null) { // if yandex maps api not loaded give it 5 secs.
      $timeout(function(){
        var map = new ymapsApi.Map("ymaps-map-id_139936384058655207154", {center: [29.03792383862299, 41.02652803715182], zoom: 15, type: "yandex#map"});
        map.controls.add("zoomControl");
        map.geoObjects.add(new ymaps.Placemark([29.038095, 41.023798], {balloonContent: "Egemsoft", iconContent: "3"}, {preset: "twirl#redIcon"}));
      },5000);
    }
    else {
      var map = new ymapsApi.Map("ymaps-map-id_139936384058655207154", {center: [29.03792383862299, 41.02652803715182], zoom: 15, type: "yandex#map"});
      map.controls.add("zoomControl");
      map.geoObjects.add(new ymaps.Placemark([29.038095, 41.023798], {balloonContent: "Egemsoft", iconContent: "3"}, {preset: "twirl#redIcon"}));
    }
  };

  /**
   * Operations on route change.
   * Arrange sections, lazy load if it's not loaded, scroll to desired section etc.
   * @function
   */
  $scope.$on('$routeChangeSuccess', function() {
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
    $activePage.set($location.hash());
  });
};
