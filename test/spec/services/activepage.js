'use strict';

describe('Service: activePage', function () {

  // load the service's module
  beforeEach(module('egemsoftWebApp'));

  // instantiate service
  var activePage;
  beforeEach(inject(function (_activePage_) {
    activePage = _activePage_;
  }));

  it("activePage should not to be null", function() {
    expect(activePage).not.toBe(null);
  });

});
