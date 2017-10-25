var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
// var mongoose = require('mongoose');
var Reporting = require('../../models/reporting');

//var ObjectID =require('mongod').ObjectID;//is this neccessary...if app works, then no.

//connect to DB
// mongoose.connect('localhost:27017/watchale');

//GET function
router.get('/', function (req, res) {
    Reporting.find({}, function (err, response) {
        if (err) {
            console.log('error reporting sights from db:', err);
            res.sendStatus(500);
        }//end error
        else {
            console.log('/reportSight get route hit');
            res.send(response);
        } //!err
    }); //end find
});

//POST function
router.post('/', function (req, res) {
    console.log('inside /reportSight post', req.body);
    var userConnect = req.body;
    userConnect.addedBy = req.user.googleName;
    var newSighting = new Reporting(userConnect);
    
    newSighting.save(function (err) {
        console.log('here');
        if (err) {
            console.log(err);
            res.sendStatus(500);
        } else {
            console.log('successful Sighting Report created');
            res.sendStatus(201);
        }
    });
});

//export router 
module.exports = router;






























// mondoDB.collection('reporting').save(req.body, (err, result) => {
//     if (err) return console.log(err)

//     console.log('saved sighting report to database')
//     res.redirect('#!/sightings')
//     })


// app.get('#!/sightings', (req, res) => {
//     mondoDB.collection('reporting').save(req.body, (err, result) => {
//         if (err) return console.log(err)

//         console.log('saved sighting report to database')
//         res.redirect('#!/sightings')
//     })
// })


//successful POST inplementation by Dev from codeChallege5LiveSolve:
// router.post('/', function (req, res) {
//     console.log('inside hero post', req.body);

//     var newHero = new Hero(req.body);

//     newHero.save(function (err) {
//         console.log('here');
//         if (err) {
//             console.log(err);
//             res.sendStatus(500);
//         } else {
//             console.log('successful hero created');
//             res.sendStatus(201);
//         }
//     });
// });
