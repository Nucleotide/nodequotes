'use strict';

angular.module('nodequotesApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeQuotes = [
      'Fear of the Dark - Bruce Dickinson',
      'Another nice quote - Me',
      'Hey - Hello'
    ];

    $scope.number = 0;
    $scope.showme = $scope.awesomeQuotes[$scope.number];

    $scope.swapQuote = function(){
      if ($scope.number === 2) {
				$scope.number = 0;
				$scope.showme = $scope.awesomeQuotes[$scope.number];
      }
      else {
				$scope.number = $scope.number+1;
				$scope.showme = $scope.awesomeQuotes[$scope.number];
      }
    };
  });