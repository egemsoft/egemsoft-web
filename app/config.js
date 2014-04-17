"use strict";

/**
 * Egem web app config module
 * $config provider to serve configuration variables
 * @author Ismail Demirbilek
 */
angular.module("egem.config", []).
	factory("$config", [
	  function() {
	  	return {
	  		// edit here to configure sections (pages), there should be a section-name.html file
		  	sections: ['about','services','contact'],
		  	// edit here to configure section source directory e.g. /content/about.html
		  	contentSrc: '/content/'
		  };
	  }]);
