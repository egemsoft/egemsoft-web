'use strict';

describe('Service: language', function () {

  // load the service's module
  beforeEach(module('egemsoftWebApp'));

  // instantiate service
  var language;
  beforeEach(inject(function (_language_) {
    language = _language_;
  }));

  it("language should not to be null", function() {
    expect(language).not.toBe(null);
  });

});
