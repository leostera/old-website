/**
 * @name website.controllers:hello
 */
angular.module('website')
  .controller('Hello',['$scope', '$routeParams', 'Notification'
  , function ($scope, $routeParams, Notification) {
    $scope.name = $routeParams.name || undefined;
    $scope.greet = function () {
      Notification.create({
        title: "Ahoy!",
        text: "Welcome to my site! Follow me on twitter or github @leostera",
        show: true //milliseconds
      });
    }
  }]);
