myApp.controller('UpdateController', function (AppService) {

    console.log('in update controller');
    var vm = this;

    AppService.getSights();
    vm.sightInfo = AppService.sightingsObject.data;


    vm.confirmed = function () {
        AppService.confirmed();
        console.log('in confirmed function');
    }

});