'use strict';

describe('Service: language', function () {

  // load the service's module
  beforeEach(module('egemsoftWebApp'));

  // instantiate service
  var language;
  beforeEach(inject(function (_language_) {
    language = _language_;
  }));

  it("must has language provider", function() {
    expect(language).not.toBe(null);
  });

  it("must has strings object in provider", function() {
    expect(language.strings).not.toBe(null);
    expect(typeof(language.strings)).toBe('object');
  });

  it("must has availableLanguages array with at least one element in provider", function() {
    expect(language.availableLanguages).not.toBe(null);
    expect(typeof(language.availableLanguages)).toBe('object');
    expect(language.availableLanguages.length).not.toBe(0);
  });

  it("must has a working addString function in provider", function() {
    expect(language.addString).not.toBe(null);
    expect(typeof(language.addString)).toBe('function');
    language.addString('bardak', {tr: 'Bardak', en: 'Cup'});
    expect(language.strings.bardak).not.toBe(null);
    expect(language.strings.bardak.tr).toBe('Bardak');
    expect(language.strings.bardak.en).toBe('Cup');
  });

  it("must has a working addStrings function in provider", function() {
    expect(language.addStrings).not.toBe(null);
    expect(typeof(language.addStrings)).toBe('function');
    language.addStrings({bardak: {tr: 'Bardak', en: 'Cup'}});
    expect(language.strings.bardak).not.toBe(null);
    expect(language.strings.bardak.tr).toBe('Bardak');
    expect(language.strings.bardak.en).toBe('Cup');
  });


});
