'use strict';

angular.module('egemsoftWebApp')
  
  /**
   * @ngdoc service
   * @name egemsoftWebApp.factory:activePage
   * @description
   * Service factory to store and share active page value between controllers. Implements observer callback pattern to inform the changes.
    @example
    ```js
    angular.module('egemsoftWebApp')
      .controller('HomeCtrl', function($scope, $route, activePage) {
        activePage.registerObserverCallback(function() {
          // runs whenever activePage.set() method is called.
          $scope.activePage = activePage.get();
        });

        $scope.$on('$routeChangeSuccess', function() {
          // set active page as home
          activePage.set('home');
        });
      })
      .controller('PageCtrl', function($scope, $route, activePage) {
        activePage.registerObserverCallback(function() {
          // runs whenever activePage.set() method is called.
          $scope.activePage = activePage.get();
        });

        $scope.$on('$routeChangeSuccess', function() {
          // set active page as page
          activePage.set('page');
        });
      });
   ```
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
     * @methodOf egemsoftWebApp.factory:activePage
     * @description
     * Set method for active page variable. Calls registered callback functions to inform about the change.
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
     * @ngdoc method
     * @name get
     * @methodOf egemsoftWebApp.factory:activePage
     * @description
     * Get method for active page variable.
     * @return {string} - Current active page value.
     * @function
     */
    activePageService.get = function() {
      return activePage;
    };

    /**
     * @ngdoc method
     * @name registerObserverCallback
     * @methodOf egemsoftWebApp.factory:activePage
     * @description
     * Registers callback to observe changes on service
     * @param {function} callback - Observer callback function
     * @function
     */
    activePageService.registerObserverCallback = function(callback) {
      observerCallbacks.push(callback);
    };

    return activePageService;
  });