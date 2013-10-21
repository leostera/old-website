angular.module('website')
.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/', {
    controller: 'Hello',
    template: require('./views/hello')
  }).otherwise({
    redirectTo: '/'
  });
}]);
