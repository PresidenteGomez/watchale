myApp.controller('LandingController', function ($location) {

    var vm = this;

    vm.currentNavItem = $location.path();
});
