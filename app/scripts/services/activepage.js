'use strict';

angular.module('egemsoftWebApp')
  
  /**
   * @ngdoc service
   * @name egemsoftWebApp.factory:activePage
   * @description
   * Service factory to store active page between controllers
   * Initial value is 'home'
   * @author Ismail Demirbilek
   * @function
   */
  .factory('activePage', function () {
    var activePage = 'home';
    var observerCallbacks = [];
    var activePageService = {};
    
    /**
     * @ngdoc method
     * @name set
     * @memberOf egemsoftWebApp.factory:activePage
     * ædescription
     * Set method for active page variable.
     * @param {string} page - Active page to define on service.
     * @function
     */
    activePageService.set = function(page) {
      activePage = page;
      // call registered observers
      angular.forEach(observerCallbacks, function(callback){
        callback();
      });
    };

    /**
     * Get method for active page variable.
     * @return {string} - Active page defined on service.
     * @function
     */
    activePageService.get = function() {
      return activePage;
    };

    /**
     * Registers callback to observe changes on service
     * @param {function} callback - Observer callback function
     * @function
     */
    activePageService.registerObserverCallback = function(callback) {
      observerCallbacks.push(callback);
    };

    return activePageService;
  });