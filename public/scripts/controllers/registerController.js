myApp.controller('RegisterController', function ($location) {

    var vm = this;
    vm.submit = function () {
        console.log('Form is submitted with following user', vm.user);
    }
    vm.currentNavItem = $location.path();
});