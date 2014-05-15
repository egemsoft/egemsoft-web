'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('egemsoftWebApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('must be defined', function() {
    expect(!!MainCtrl).toBe(true);
  });

  it('must has a scope', function() {
    expect(!!scope).toBe(true);
  });

  it('must has an accurate config model', function() {
    // inject config provider
    inject(function(config) {
      expect(scope.config).toBe(config);
    });
  });

  it('must has an accurate sections model contains home page sections', function() {
    // inject config provider
    inject(function(config) {
      expect(scope.sections).toBe(config.sections);
    });
  });

  it('must has a valid loadedSections model', function() {
    expect(!!scope.loadedSections).toBe(true);
    expect(scope.loadedSections.length > 0).toBe(true);
  });

  it('must has a valid year model', function() {
    expect(scope.year).toBe(new Date().getFullYear());
  });

  it('must has an accurate activePage model', function() {
    // inject config provider
    inject(function(activePage) {
      expect(scope.activePage).toBe(activePage.get());
    });
  });

  it('must has an accurate languages model representing available languages', function() {
    // inject language provider
    inject(function(language) {
      expect(scope.languages).toBe(language.availableLanguages);
    });
  });

  it('must has a valid language model representing active language', function() {
    expect(!!scope.language).toBe(true);
    expect(typeof(scope.language)).toBe('object');
  });

  it('must has a working setLanguage function', function() {
    expect(!!scope.setLanguage).toBe(true);
    // inject language provider
    scope.setLanguage(scope.languages[0]);
    expect(scope.language).toBe(scope.languages[0]);
  });

  it('must has a working locale function', function() {
    expect(!!scope.locale).toBe(true);
    // inject language provider
    inject(function(language) {
      expect(scope.locale('home')).toBe(language.strings['home'][scope.language.key]);
    });
  });
});
