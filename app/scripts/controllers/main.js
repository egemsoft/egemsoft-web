'use strict';

/**
 * Root controller of the app.
 * Responsible from the configurations, main functions, shared variables.
 * @function
 */
angular.module('egemsoftWebApp')
  .controller('MainCtrl', function($scope, $location, $route, config, language, activePage, $anchorScroll, $window, $timeout) {
		// options
	  $scope.config = config;

	  $scope.activePage = activePage.get();


	  activePage.registerObserverCallback(function() {
	    $scope.activePage = activePage.get();
	  });

	  // html files to load
	  $scope.sections = $scope.config.sections;
	  
	  //loaded html files
	  $scope.loadedSections = [$scope.sections[0]];
	  $scope.window = $window;
	  // active year to show at footer
	  $scope.year = new Date().getFullYear();

	  $scope.languages = language.availableLanguages;

	  // Set user's language if supported
	  var userLanguage = navigator.language || navigator.userLanguage;
	  if(userLanguage == 'tr') // set Turkish
	    $scope.language = language.availableLanguages[0];
	  else                    // set English
	    $scope.language = language.availableLanguages[1];

	  /**
	   * Sets active language to show desired translations
	   * @param {object} language - Desired language object, including key and label props. 
	   * @function
	   */
	  $scope.setLanguage = function(language) {
	  	$scope.language = language;
	  	// scroll to current section, text sizes may differentiate for locales.
	  	$anchorScroll();
	  };

	  /**
	   * Translate function. Retrieves translation defined by key from language provider.
	   * @return {string} - Active language (defined by $scope.language) translation of string defined by key.
	   */
	  $scope.locale = function(key) {
	  	return language.strings[key][$scope.language.key];
	  };
	});
