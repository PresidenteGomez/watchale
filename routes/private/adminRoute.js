var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
// var mongoose = require('mongoose');
var Reporting = require('../../models/reporting');
var User = require('../../models/user');


//Gets info from 'User.js" model to determine if the user is an Admin. If so, then it goes to AppService -> NavController -> nav.html
router.get('/', function (req, res) {
    console.log('private/adminRoute hit!');
    User.find({ googleEmail: req.user.googleEmail }, { 'admin': 1 }, function (err, response) {
        if (err) {
            console.log('getAdmin error:', err)
            res.sendStatus(500);
        } else {
            console.log('in adminRoute response - >', response);
            res.send(response);
        }
    }); //end find
});


//this route is to eventually "update" a sighting to either display "verified" in the "All Sightings" page.----NEEDS MongoDB query that could be: db.reportings.update({_id: 'ObjectId("59f10de59b8eeb2a000b9dce")'},{confirmed: true}); 
router.put('/', function (req, res) {
    Reporting.update({}, function (err, response) {
        res.sendStatus(201);
    })
    console.log('in router.put(/) in adminRoute');
})

module.exports = router;