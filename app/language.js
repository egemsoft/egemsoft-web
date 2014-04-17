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
    	;
    }]).

  /**
   * $language provider
   * Provides all language strings with locale values.
   * Add strings here to provide multilingual locale variables.
   */
  factory("$language", [
    function() {
    	return {
        strings: {
          // edit here, or see methods below
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
        },

        /**
         * Available languages configuration
         */
        availableLanguages: [{
          key: 'tr',
          label: 'Türkçe'
        },
        {
          key: 'en',
          label: 'English'
        }],

        /**
         * Adds new string translation to the provider programmatically.
         * Usage: $language.addString(door, {tr: 'Kapı', en: 'Door'})
         */
        addString: function(key, locales) {
          if(key)
            this[key] = locales;
        },

        /**
         * Adds multiple string sets to the provider programmatically.
         */
        addStrings: function(strings) {
          angular.forEach(strings, function(locale, key) {
            this.addString(key, locale);
          });
        },

        /**
         * Adds a language configuration to the availableLanguages property programmatically.
         * Usage: $language.addLanguage('es', 'Español')
         */
        addLanguage: function(key, label) {
          this.availableLanguages.push({key: key, label: label});
        }
  	  };
    }]);
