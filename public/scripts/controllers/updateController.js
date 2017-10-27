myApp.controller('UpdateController', function (AppService) {

    var vm = this;
    
    AppService.getSights();
    vm.sightInfo = AppService.sightingsObject.data;
});