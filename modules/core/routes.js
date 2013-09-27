angular.module('ntropyCore')
.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/error', {
      controller: 'error',
      template: require('./views/error')
    });
}]);