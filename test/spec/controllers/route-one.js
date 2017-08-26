'use strict';

describe('Controller: RouteOneCtrl', function () {

  // load the controller's module
  beforeEach(module('productListApp'));

  var RouteOneCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RouteOneCtrl = $controller('RouteOneCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(RouteOneCtrl.awesomeThings.length).toBe(3);
  });
});
