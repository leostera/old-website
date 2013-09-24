/**
 * @name website.controllers:home
 * @description
 * smash the services together
 */
angular('website')
  .controller('Home',['$scope'
  , function ($scope) {
    $scope.message = 'Welcome to Home';
  });