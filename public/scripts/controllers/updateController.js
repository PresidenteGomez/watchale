myApp.controller('UpdateController', function ($location) {

    var vm = this;

    vm.currentNavItem = $location.path();
});