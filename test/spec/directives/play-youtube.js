'use strict';

describe('Directive: playYoutube', function () {

  // load the directive's module
  beforeEach(module('productListApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<play-youtube></play-youtube>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the playYoutube directive');
  }));
});
