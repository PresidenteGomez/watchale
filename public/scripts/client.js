// var googleAuthApp = angular.module('theGoogles', ['ngRoute']);
var myApp = angular.module('myApp', ['ngMaterial', 'ngRoute']);

/// Routes ///
// googleAuthApp.config(['$routeProvider', function ($routeProvider) {
myApp.config(function ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/login', {
      templateUrl: '/public/views/templates/login.html',
      controller: 'LoginController as lc'
    })
    .when('/register', {
      templateUrl: '/public/views/templates/register.html',
      controller: 'RegisterController as rc'
    })
    .when('/sightings', {
      templateUrl: '/public/views/templates/allSightings.html',
      controller: 'SightingsController as sc'
    })
    .when('/report', {
      templateUrl: '/public/views/templates/reportSightings.html',
      controller: 'ReportController as pc'
    })
    .when('/update', {
      templateUrl: '/public/views/templates/updateSightings.html',
      controller: 'UpdateController as uc'
    })
    .when('/approve', {
      templateUrl: '/public/views/templates/approveSightings.html',
      controller: 'ApproveController as ac'
    })
    .otherwise({
      redirectTo: 'login',
    });
});
