'use strict';

/**
 * @ngdoc controller
 * @name egemsoftWebApp.controller:HomeCtrl
 * @scope
 * @requires $scope
 * @requires $location
 * @requires $route
 * @requires $q
 * @requires $timeout
 * @requires anchorScroll
 * @requires config
 * @requires activePage
 * @description 
 * Home page controller.
 * Constructs dynamic objects on home page. Provides lazy loading of sections, etc.
 * @function
 * @author Ismail Demirbilek
 */
angular.module('egemsoftWebApp')
  .controller('HomeCtrl', function($scope, $location, $route, config, activePage, $anchorScroll, $timeout, $q) {
    $scope.year = new Date().getFullYear();

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

    // Update slides and blocks with current language setting
    $scope.$watch('language', function() {
      var slides = config.home[$scope.language.key].slides;
      slides[0].active = true;
      $scope.slides = slides;
      $scope.blocks = config.home[$scope.language.key].blocks;
    }, true);

    // Set block slides, ex: 3 blocks per slide
    $scope.$watch('blocks', function() {
      var blocksSlides = [];
      // Blocks slides configuration, creates items in slide with defined item numbers per slide
      var blockSlidesSize = Math.ceil($scope.blocks.length/config.home.blocksPerSlide);
      for(var i=0; i<blockSlidesSize; i++) {
        blocksSlides.push($scope.blocks.slice(i*config.home.blocksPerSlide, i*config.home.blocksPerSlide + config.home.blocksPerSlide));
      }
      blocksSlides[0].active = true;
      $scope.blocksSlides = blocksSlides;
    }, true);

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
      activePage.set($location.hash());
    });
  });