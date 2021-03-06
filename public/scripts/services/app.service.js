myApp.service('AppService', function ($http) {
    var sv = this;

    sv.sightingsObject = { data: [] };
    sv.adminObject = { admin: false };
    sv.userObject = [];
    //sv.fileStackObject = { filesUploaded: [] };
    console.log('in AppService');

    //function to add a sighting to the database
    sv.postReport = function (sightingsObject) {
        console.log('in postReport');
        $http({
            method: 'POST',
            url: '/private/reportSight',
            data: sightingsObject
        }).then(function (response) {
            console.log('in service, back with member submitted reports', response);
            sv.getSights();
            console.log('ICE sightings: ', sv.postReport);

        }); //end $http post

    } //end postReport

    //function to GET sightings data from database
    sv.getSights = function () {
        $http.get('/private/reportSight').then(function (response) { //might need to use '/sighting'...lets see where this goes!
            sv.sightingsObject.data = response.data;
            console.log('in get:', sv.sightingsObject.data);
        }); //end $http get
    }//end getSights

    //retrieving if User is an admin from adminRoute
    sv.getAdmin = function () {
        $http.get('/private/adminRoute').then(function (response) {
            sv.adminObject.admin = response.data[0].admin;
                console.log(response.data[0].admin);

        })
    }
    sv.getUser = function () {
        $http.get('/private/regUserRoute').then(function (response) {
            sv.userObject = response.data;
            
            console.log(response.data.user);

        })
    }

    sv.confirmed = function (confirmedId) {
        $http.put('/private/reportSight/' + confirmedId).then(function (response) {
            
        console.log('in sv.confirmed');
    })
    }

    sv.delete = function (confirmedId) {
        $http.delete('/private/reportSight/' + confirmedId).then(function (response) {

            console.log('in sv.confirmed');
        })
    }




}); //end myApp.service
