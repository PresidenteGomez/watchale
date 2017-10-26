// var googleAuthApp = angular.module('theGoogles', ['ngRoute']);
var myApp = angular.module('myApp', ['ngMaterial', 'ngRoute']);

/// Routes ///
// googleAuthApp.config(['$routeProvider', function ($routeProvider) {
myApp.config(function ($routeProvider) {
 //NEED TO FIND A FUNCTION THAT ONLY ALLOWS YOU TO SEE PAGES IF YOU'RE LOGGED-IN
  $routeProvider
    .when('/', {
      templateUrl: 'views/landing.html',
      controller: 'LandingController as dc'
    })  
  .when('/login', {
      templateUrl: 'views/login.html',
      controller: 'LoginController as lc'
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
    .when('/nav', {
      templateUrl: 'views/nav.html',
      controller: 'NavController as nav'
    })
    .otherwise({
      redirectTo: '/',
    });
});
