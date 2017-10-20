myApp.controller('ApproveController', function ($location) {

    var vm = this;

    vm.currentNavItem = $location.path();
});