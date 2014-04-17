"use strict";
angular.module("egem-language", []).factory("$language", [
  function() {
  	return {
  		language: {
  			tr: 'Dil',
  			en: 'Language'
  		},
  		about: {
  			tr: 'Hakkımızda',
  			en: 'About'
  		},
  		services: {
  			tr: 'Ürünler',
  			en: 'Services'
  		},
  		contact: {
  			tr: 'İletişim',
  			en: 'Contact'
  		}
	  };
  }]);