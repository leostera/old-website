/**
 * @name website.controllers:hello
 */
angular.module('website')
  .controller('Hello',['$scope'
  , function ($scope) {
    $scope.message = 'Welcome to Hello';
  }]);