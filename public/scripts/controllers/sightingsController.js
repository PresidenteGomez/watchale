myApp.controller('SightingsController', function (AppService) {
    console.log('SightingsController Loaded!');

    var vm = this;

    AppService.getSights(); 
    vm.sightInfo = AppService.sightingsObject.data;

    console.log('SightingsController ->' , vm.sightInfo);

});