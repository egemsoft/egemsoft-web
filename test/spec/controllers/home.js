'use strict';

describe('Controller: HomeCtrl', function () {

  // load the controller's module
  beforeEach(module('egemsoftWebApp'));

  var HomeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HomeCtrl = $controller('HomeCtrl', {
      $scope: scope
    });
  }));

  it('must be defined', function() {
    expect(!!HomeCtrl).toBe(true);
  });

  it('must has a scope', function() {
    expect(!!scope).toBe(true);
  });

  it('must has a valid placeMap function', function() {
    expect(!!scope.placeMap).toBe(true);
  });
});
