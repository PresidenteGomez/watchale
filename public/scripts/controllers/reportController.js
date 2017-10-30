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
            image: vm.image,
            confirmed: false
        };
        console.log('addReport object from DOM ->', addSightingsObject);
        //this will add data to watchale database using the AppService
        AppService.postReport(addSightingsObject);
    };

 
    // vm.imageFile = AppService.fileStack;

    // AppService.openPicker();
//     var fsClient = filestack.init('AX7xp5ytvS9GM2CfyuWGwz');
//     // var fileHandle = '';
//    function openPicker() {
//         console.log('openPicker() ->', openPicker);
//         fsClient.pick({
//             fromSources: ["local_file_system", "imagesearch", "facebook", "instagram"]
//         }).then(function (response) {
//             // declare this function to handle response
//             handleFilestack(response);
//         });
//     }
    
    AppService.getSights();
});