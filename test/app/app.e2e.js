/// <reference path="../../typings/tsd.d.ts" />

 /*
  * TODO: ES5 for now until I make a webpack plugin for protractor
  */
describe('App', function() {
  var subject;
  var result;

  beforeEach(function() {
    browser.get('/');
  });

  afterEach(function() {
    expect(subject).toEqual(result);
  });

  it('should have a title', function() {
    subject = browser.getTitle();
    result  = 'Angular 2';
  });
});
