'use strict';

describe('Controller: FirstControllerCtrl', function () {

  // load the controller's module
  beforeEach(module('productListApp'));

  var FirstControllerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FirstControllerCtrl = $controller('FirstControllerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(FirstControllerCtrl.awesomeThings.length).toBe(3);
  });
});
