'use strict';

describe('Service: activePage', function () {

  // load the service's module
  beforeEach(module('egemsoftWebApp'));

  // instantiate service
  var activePage;
  beforeEach(inject(function (_activePage_) {
    activePage = _activePage_;
  }));

  it('must has language provider object', function() {
    expect(activePage).not.toBe(undefined);
    expect(typeof(activePage)).toBe('object');
  });

  it('must has get function in provider', function() {
    expect(activePage.get).not.toBe(undefined);
    expect(typeof(activePage.get)).toBe('function');
  });

  it('must has set function in provider', function() {
    expect(activePage.set).not.toBe(null);
    expect(typeof(activePage.set)).toBe('function');
  });

  it('must has registerObserverCallback function in provider', function() {
    expect(activePage.registerObserverCallback).not.toBe(undefined);
    expect(typeof(activePage.registerObserverCallback)).toBe('function');
  });

  it('set function of the provider must call multiple callback functions', function() {
    var activePageToBeSet = 'home';
    var callback = function() {
      expect(activePage.get()).toBe(activePageToBeSet);
    };
    var callback2 = function() {
      expect(activePage.get()).toBe(activePageToBeSet);
    };
    activePage.registerObserverCallback(callback);
    activePage.registerObserverCallback(callback2);
    activePage.set(activePageToBeSet);
  });

});
