myApp.controller('ReportController', function ($location) {

    var vm = this;

    vm.currentNavItem = $location.path();
});