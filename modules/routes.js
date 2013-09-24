angular('leostera.com')
.config(['$routeProvider', function ($routeProvider) {

  // Insert config here!
  // 
  $routeProvider
    .when('/home', {
      controller: 'home',
      // remember template is the template itself
      // but since all the templates are smashed
      // in the build.js in the form of scripts
      // require('website/views-home') should get
      // the template, so a middleware might be
      // an elegant solution here
      template: 'views/home'
    })

    // add this by default, we'll include the
    // error controller in the ntropy core module
    .when('/error', {
      controller: 'error',
      template: 'views/error'
    })

    // when the first controller is scaffolded
    // add this here and point it to that controller
    .otherwise({
      redirectTo: '/home'
    });
}]);