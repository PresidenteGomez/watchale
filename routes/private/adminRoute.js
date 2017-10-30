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



module.exports = router;