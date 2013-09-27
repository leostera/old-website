angular.module('website')
.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/home', {
    controller: 'Hello',
    template: require('./views/hello')
  }).otherwise({
    redirectTo: '/home'
  });
}]);
