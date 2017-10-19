var googleAuthApp = angular.module('theGoogles', ['ngRoute']);

googleAuthApp.config(['$routeProvider', function ($routeProvider) {

  $routeProvider
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
    .when('/sightings', {
      templateUrl: '/public/views/templates/allSightings.html',
      controller: 'CalendarController',
      controllerAs: 'calendar',
    })
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
    .when('/report', {
      templateUrl: '/public/views/templates/reportSighting.html',
      controller: 'AuthController',
      controllerAs: 'auth',
    })
    .otherwise({
      redirectTo: 'login',
    });
},
]);
