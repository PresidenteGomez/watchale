myApp.controller('LandingController', function (AuthFactory, $location, $window, AppService) {

    var vm = this;
    vm.userObject = AppService.userObject;
    vm.currentNavItem = $location.path();
});
