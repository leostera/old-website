// auto-exports //

var core = angular.module('ntropyCore',
  [ 'ngRoute'
  , 'ngAnimate'
  , 'ngResource'
  , 'ngSanitize'
  , 'ngCookies'
  ]);

module.exports = function (appName, deps) {

  deps = deps || [];

  var app = angular.module(appName, deps.concat(['ntropyCore','ngRoute']));

  require('./controllers/error.js');
  require('./config');
  require('./routes');
  
  return app;
};