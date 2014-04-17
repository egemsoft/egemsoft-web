"use strict";
angular.module("egem.config", []).factory("$config", [
  function() {
  	return {
	  	languages: [{ key: 'tr', label: 'Türkçe' }, { key:'en', label: 'English' }],
	  	sections: ['about','services','contact'],
	  	contentSrc: '/content/'
	  };
  }]);