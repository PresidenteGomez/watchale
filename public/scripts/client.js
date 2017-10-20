// var googleAuthApp = angular.module('theGoogles', ['ngRoute']);
var myApp = angular.module('myApp', ['ngMaterial', 'ngRoute']);

/// Routes ///
// googleAuthApp.config(['$routeProvider', function ($routeProvider) {
myApp.config(function ($routeProvider, $locationProvider) {
 
  $routeProvider
    .when('/', {
      templateUrl: 'views/landing.html',
      controller: 'LandingController as dc'
    })  
  .when('/login', {
      templateUrl: 'views/login.html',
      controller: 'LoginController as lc'
    })
    .when('/register', {
      templateUrl: 'views/register.html',
      controller: 'RegisterController as rc'
    })
    .when('/sightings', {
      templateUrl: 'views/sightings.html',
      controller: 'SightingsController as sc'
    })
    .when('/report', {
      templateUrl: 'views/report.html',
      controller: 'ReportController as pc'
    })
    .when('/update', {
      templateUrl: 'views/update.html',
      controller: 'UpdateController as uc'
    })
    .when('/approve', {
      templateUrl: 'views/approve.html',
      controller: 'ApproveController as ac'
    })
    .otherwise({
      redirectTo: '/',
    });
});
