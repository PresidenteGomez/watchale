myApp.controller('SightingsController', function ($location) {

    var vm = this;

    vm.currentNavItem = $location.path();
});