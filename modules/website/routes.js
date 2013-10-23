angular.module('website')
.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/:name?', {
    controller: 'Hello',
    template: require('./views/hello')
  }).otherwise({
    redirectTo: '/'
  });
}]);
