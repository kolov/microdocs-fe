var underscore = angular.module('underscore', []);
underscore.factory('_', function () {
  return window._; // assumes underscore has already been loaded on the page
});


var minidocsModule = angular.module("minidocs", [
  'ngResource',
  'ui.bootstrap.tabs',
  'ui.bootstrap',
  'ui.router',
  'ui.bootstrap.modal',
  'ngSanitize',
  'angularLoad',
  'underscore' ]);

minidocsModule.config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/home');

  $stateProvider

    .state('home', {
      url: '/home',
      controller: 'MainController',
      templateUrl: 'app/pages/main.html'
    })

    .state('disclaimer', {
      url: '/disclaimer',
      controller: 'MinidocsAppController',
      templateUrl: 'app/pages/disclaimer.html'
    })

    .state('about', {
      url: '/about',
      controller: 'MinidocsAppController',
      templateUrl: 'app/pages/about.html'
    });

});
minidocsModule
  .config(['$sceDelegateProvider', function ($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist(
      ['self',
        'https://www.google.com/**']);
  }]);

minidocsModule.config(['$httpProvider', function ($httpProvider) {
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
}]);


minidocsModule.config(['$httpProvider', function ($httpProvider) {
  $httpProvider.defaults.useXDomain = true;
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
}]);

minidocsModule.factory('logoutService', ['$resource', function ($resource) {
  return $resource('/logout', {},
    {
      'logout': {method: 'POST'}
    });
}]);
minidocsModule.factory('loginService', ['$resource', function ($resource) {
  return $resource('/login', {},
    {
      'login': {method: 'POST'}
    });
}]);
minidocsModule.factory('usersService', ['$resource', function ($resource) {
  return $resource('/current/user', {},
    {
      'query': {isArray: false}
    });
}]);







