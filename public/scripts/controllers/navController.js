myApp.controller('NavController', function (AuthFactory, $location, $window) {
  var vm = this;
  var authFactory = AuthFactory;

  console.log('location path ->', $location.path());
  vm.currentNavItem = $location.path();
  
  vm.displayLogout = false; // should we display the logout option on the DOM?
  vm.message = {
    text: false,
    type: 'info',
  };

  authFactory.isLoggedIn()
  .then(function (response) {
    if (response.data.status) {
      vm.displayLogout = true;
      authFactory.setLoggedIn(true);
      vm.username = response.data.name;
    } else { // is not logged in on server
      vm.displayLogout = false;
      authFactory.setLoggedIn(false);
    }
  },

  function () {
    vm.message.text = 'Unable to properly authenticate user';
    vm.message.type = 'error';
  });

  vm.logout = function () {
    authFactory.logout()
      .then(function (response) { // success
        authFactory.setLoggedIn(false);
        vm.username = '';
        $window.location.href = '/'; // forces a page reload which will update our NavController
      },

      function (response) { // error
        v.message.text = 'Unable to logout';
        vm.message.type = 'error';
      });
  };
 
});
