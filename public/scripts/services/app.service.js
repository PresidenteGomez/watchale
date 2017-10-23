myApp.service('AppService', function ($http) {
    var sv = this;

    sv.sightingsObject = {data: []};

    console.log('in AppService');

//function to add a sighting to the database
    sv.postReport = function (sightingsObject) {
        console.log('in postReport');
        $http({
            method: 'POST',
            url: '/reportSight',
            data: sightingsObject
        }).then(function (response) {
            console.log('in service, back with member submitted reports', response);
            sv.getSights();
            console.log('ICE sightings: ', sv.getsights);

        }); //end $http post
    
    } //end postReport

    //function to GET sightings data from database
    sv.getSights = function () {
        $http.get('/reportSight').then(function (response) { //might need to use '/sighting'...lets see where this goes!
            sv.sightingsObject.data = response.data;
            console.log('in get:', sv.sightingsObject.data);
        }); //end $http get
    }//end getSights

}); //end myApp.service

// module.exports = AppService;






















//---------BEFORE CHANGE-----------------^^^^^
// .then(function (response) {
//     console.log('in service, back with member submitted reports', response);
//     sv.sights = response.data;
//     console.log('ICE sightings: ', sv.sight);





// var User = require('../models/reporting');

// var AppService = {
//     createNewReporting: function (description, date, time, location, image) {
//         var reporting = new Reporting();

//         reporting.description = description;
//         reporting.date = date;
//         reporting.time = time;
//         reporting.location = location;
//         reporting.image = image;

//         reporting.save(function (err) {
//             if (err) {
//                 return callback(err, null);
//             }
//             return callback(null, reporting);
//         });
//     }

// }