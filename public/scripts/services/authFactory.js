// myApp.service('AuthFactory', function ($http) {

//   var sv = this;
//   sv.Status = {
//     loggedIn: false,
//   };

//   return {
//     Status: Status,

//     sv.checkLoggedIn = function () {
//       return Status.loggedIn;
//     },

//   sv.isLoggedIn = function () {
//       return $http.get('/auth');
//     },

//   sv.setLoggedIn = function (value) {
//       Status.loggedIn = value;
//     },

//   sv.logout = function () {
//       return $http.get('/auth/logout');
//     }
//   };

// });

myApp.factory('AuthFactory', function ($http) {
  var Status = {
    loggedIn: false,
  };

  // the public API
  return {
    Status: Status,

    checkLoggedIn: function () {
      return Status.loggedIn;
    },

    isLoggedIn: function () {
      return $http.get('/auth');
    },

    setLoggedIn: function (value) {
      Status.loggedIn = value;
    },

    logout: function () {
      return $http.get('/auth/logout');
    },
  };

});
