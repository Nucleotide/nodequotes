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

  it('should give a correct size of quotes', function () {
      expect(scope.number).toEqual(0);
    });
});
