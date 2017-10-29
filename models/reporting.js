/**
 * Reporting sighting schema for Mongoose.
 *
 * @module models/reporting
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Reporting = require('../models/reporting');
    
var reportingSchema = new Schema({
    description: String,
    date: String,
    time: {
        type: Date,
        default: Date.now
    },
    location: Number,
    image: String, 
    addedBy: String,//need to update this into accepting images
    confirmed: Boolean
});

var Reporting = mongoose.model('reporting', reportingSchema);

module.exports = Reporting;
