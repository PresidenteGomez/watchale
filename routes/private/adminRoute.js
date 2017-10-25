var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
// var mongoose = require('mongoose');
// var Reporting = require('../../models/reporting');




router.get('/', function (req, res) {
    Reporting.find({}, function (err, response) {
       res.send(req.user.admin);
    }); //end find
});


module.exports = router;