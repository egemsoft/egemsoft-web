"use strict";

/**
 * Egemsoft web app language module
 * Serves language helper providers.
 * @author Ismail Demirbilek
 */
angular.module("egem.language", []).

  /**
   * $availableLanguages provider
   * Provides supported languages.
   * Add languages here if you plan to support more.
   */
  factory("$availableLanguages", [
    function() {
    	return [
    		{
    			key: 'tr',
    			label: 'Türkçe'
    		},
  	  	{
  	  		key: 'en',
  	  		label: 'English'
  	  	}];
    }]).

  /**
   * $language provider
   * Provides all language strings with locale values.
   * Add strings here to provide multilingual locale variables.
   */
  factory("$language", [
    function() {
    	return {
        // edit here
    		language: {
    			tr: 'tr/en',
    			en: 'en/tr'
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
