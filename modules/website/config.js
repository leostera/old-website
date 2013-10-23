angular.module('website')
.config(['$locationProvider', 'NotificationProvider',
  function ($locationProvider, NotificationProvider) {
  NotificationProvider.setDefaults({
    image: "/build/website/images/lea.png"
  });
  $locationProvider.html5Mode(true);
}]);