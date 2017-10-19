/**
 * Reporting sighting schema for Mongoose.
 *
 * @module models/reporting
 */

var mongoose = require('mongoose');

var reportingSchema = mongoose.Schema({
    whatHappen: String,
    date: { type: Date, default: Date.now },
    where: String,
    img: { data: Buffer, contentType: String }
});

module.exports = mongoose.model('Reporting', reportingSchema);
