var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
//var Housing = require('./housing');

//connect to DB
mongoose.connect('localhost:27017/watchale');

//POST function
app.post('/reporting', (req, res) => {
mondoDB.collection('reporting').save(req.body, (err, result) => {
    if (err) return console.log(err)

    console.log('saved sighting report to database')
    res.redirect('#!/sightings')
    })
})

//export router 
module.exports = router;