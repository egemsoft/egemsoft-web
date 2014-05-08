'use strict';

describe('Service: config', function () {

  // load the service's module
  beforeEach(module('egemsoftWebApp'));

  // instantiate service
  var config;
  beforeEach(inject(function (_config_) {
    config = _config_;
  }));

  it("config should not to be null", function() {
    expect(config).not.toBe(null);
  });

});
