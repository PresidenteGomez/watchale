var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
// var mongoose = require('mongoose');
var Reporting = require('../../models/reporting');
var User = require('../../models/user');


//identify if the user is non-admin -> for sing-in to dissapear in the home page and other nav views
router.get('/', function (req, res) {
    console.log('private/adminRoute hit!');
    User.find({ googleEmail: req.user.googleName }, { 'name': String }, function (err, response) {
        if (err) {
            console.log('getAdmin error:', err)
            res.sendStatus(500);
        } else {
            console.log('in adminRoute response getUser ->', response);
            res.send(response);
        }
    }); //end find
});

module.exports = router;