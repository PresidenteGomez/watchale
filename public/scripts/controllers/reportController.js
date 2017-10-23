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
        }
        swal({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, submit sighting!',
            cancelButtonText: 'No, cancel!',
            confirmButtonClass: 'btn btn-success',
            cancelButtonClass: 'btn btn-danger',
            buttonsStyling: false
        }).then(function () {
            swal(
                'Submitted!',
                'Your sighting has been submitted.',
                'success'
            )
        }, function (dismiss) {
            // dismiss can be 'cancel', 'overlay',
            // 'close', and 'timer'
            if (dismiss === 'cancel') {
                swal(
                    'Cancelled',
                    'Your imaginary file is safe :)',
                    'error'
                )
            }
        });
        console.log('addReport object from DOM ->', addSightingsObject);
        //this will add data to watchale database using the AppService
        AppService.postReport(addSightingsObject);
    };

    AppService.getSights();
});

