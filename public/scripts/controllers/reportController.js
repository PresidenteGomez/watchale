myApp.controller('ReportController', function (AppService) {

    console.log('in ReportController');
    var vm = this;

    //
    vm.sightingsObject = AppService.sightingsObject;

    vm.addReport = function () {
        var addSightingsObject = {
            description: vm.description,
            date: vm.date,
            time: vm.time,
            location: vm.location,
            image: vm.image
        };
        console.log('addReport object from DOM ->', addSightingsObject);
        //this will add data to watchale database using the AppService
        AppService.postReport(addSightingsObject);
    };
    
    AppService.getSights();
});