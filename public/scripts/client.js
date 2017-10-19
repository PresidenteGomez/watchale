// var googleAuthApp = angular.module('theGoogles', ['ngRoute']);
var myApp = angular.module('myApp', ['ngMaterial', 'ngRoute']);

/// Routes ///
// googleAuthApp.config(['$routeProvider', function ($routeProvider) {
myApp.config(function ($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');
  $routeProvider
    .when('/login', {
      templateUrl: '/public/views/templates/login.html',
      controller: 'AuthController',
      controllerAs: 'auth',
    })
    .when('/register', {
      templateUrl: '/public/views/templates/register.html',
      controller: 'AuthController',
      controllerAs: 'auth',
    })
    .when('/sightings', {
      templateUrl: '/public/views/templates/allSightings.html',
      controller: 'CalendarController',
      controllerAs: 'calendar',
    })
    .when('/report', {
      templateUrl: '/public/views/templates/reportSighting.html',
      controller: 'AuthController',
      controllerAs: 'auth',
    })
    .when('/update', {
      templateUrl: '/public/views/templates/updateSightings.html',
      controller: 'CalendarController',
      controllerAs: 'calendar',
    })
    .when('/approve', {
      templateUrl: '/public/views/templates/approveSightings.html',
      controller: 'CalendarController',
      controllerAs: 'calendar',
    })
    .otherwise({
      redirectTo: 'login',
    });
});
