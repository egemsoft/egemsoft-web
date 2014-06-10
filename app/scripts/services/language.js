'use strict';

/**
 * @ngdoc service
 * @name egemsoftWebApp.factory:language
 * @description
 * Service for string translations.
 * @author Ismail Demirbilek
 */
angular.module('egemsoftWebApp')
  .factory('language', function () {
    return {

      /**
       * @ngdoc property
       * @name strings
       * @propertyOf egemsoftWebApp.factory:language
       * @description
       * Translations stored here with key[lang].
       */
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
        },
        home: {
          tr: 'Anasayfa',
          en: 'Home'
        },
        readMore: {
          tr: 'Devamını oku',
          en: 'Read more'
        }
      },

      /**
       * @ngdoc property
       * @name avaliableLanguages
       * @propertyOf egemsoftWebApp.factory:language
       * @description
       * Available languages object.
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
       * @ngdoc method
       * @name addString
       * @methodOf egemsoftWebApp.factory:language
       * @description
       * Adds new string translation to the provider programmatically.
       * Usage: $language.addString(door, {tr: 'Kapı', en: 'Door'})
       * @param {String} key - String key identifier.
       * @param {Object} locales - Translations object inluding langKey -> string maps.
       */
      addString: function(key, locales) {
        if(key)
          this.strings[key] = locales;
      },

      /**
       * @ngdoc method
       * @name addStrings
       * @methodOf egemsoftWebApp.factory:language
       * @description
       * Adds multiple string sets to the provider programmatically.
       * @param {Array} strings - String object array to be added to translations.
       */
      addStrings: function(strings) {
        var that = this;
        angular.forEach(strings, function(locale, key) {
          that.addString(key, locale);
        });
      },

      /**
       * @ngdoc method
       * @name addLanguage
       * @methodOf egemsoftWebApp.factory:language
       * @description
       * Adds a language configuration to the availableLanguages property programmatically.
       * Usage: $language.addLanguage('es', 'Español')
       * @param {String} key - Language key identifier.
       * @param {String} label - Language label to display.
       */
      addLanguage: function(key, label) {
        this.availableLanguages.push({key: key, label: label});
      }
    };
  });