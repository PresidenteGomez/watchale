myApp.controller('LoginController', function (AuthFactory) {
  var vm = this;
  var authFactory = AuthFactory;
  vm.loggedIn = authFactory.checkLoggedIn(); // NOTE: only updated on page load
});



