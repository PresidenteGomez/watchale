myApp.controller('UpdateController', function (AppService) {

    console.log('in update controller');
    var vm = this;

    AppService.getSights();
    vm.sightInfo = AppService.sightingsObject.data;


    vm.confirmed = function (confId) {
        AppService.confirmed(confId);
        console.log('in confirmed function');
    }

    vm.delete = function (confId) {
        AppService.delete(confId);

        console.log('in delete function');
    }
    
});