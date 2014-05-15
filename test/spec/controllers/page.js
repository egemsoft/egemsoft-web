'use strict';

describe('Controller: PageCtrl', function () {

  // load the controller's module
  beforeEach(module('egemsoftWebApp'));

  var PageCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PageCtrl = $controller('PageCtrl', {
      $scope: scope
    });
  }));

  it('must be defined', function() {
    expect(!!PageCtrl).toBe(true);
  });

  it('must has a scope', function() {
    expect(!!scope).toBe(true);
  });
});