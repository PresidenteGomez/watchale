myApp.controller('LoginController', function (AuthFactory) { //AuthController became LoginController
  var vm = this;
  var authFactory = AuthFactory;
  vm.loggedIn = authFactory.checkLoggedIn(); // NOTE: only updated on page load

});



