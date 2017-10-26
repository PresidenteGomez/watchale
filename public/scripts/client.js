// var googleAuthApp = angular.module('theGoogles', ['ngRoute']);
var myApp = angular.module('myApp', ['ngMaterial', 'ngRoute']);

/// Routes ///
// googleAuthApp.config(['$routeProvider', function ($routeProvider) {
myApp.config(function ($routeProvider, $mdThemingProvider) {
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
  // $mdThemingProvider.theme('default')
  //   .primaryPalette('pink', {
  //     'default': '400', // by default use shade 400 from the pink palette for primary intentions
  //     'hue-1': '100', // use shade 100 for the <code>md-hue-1</code> class
  //     'hue-2': '600', // use shade 600 for the <code>md-hue-2</code> class
  //     'hue-3': 'A100' // use shade A100 for the <code>md-hue-3</code> class
  //   })
  //   .accentPalette('Cyan');

  $mdThemingProvider.theme('default')
  .primaryPalette('light-blue', {
    'default': '700'})
    .accentPalette('pink', {
    'default': 'A200'

  });
});