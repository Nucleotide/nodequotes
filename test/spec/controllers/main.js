'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('nodequotesApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should not attach a list of aweThings to the scope', function () {
  });
});
