/**
 * Handles all routing for private routes.
 *
 * @module routes/private/index
 */
var express = require('express');
var router  = express.Router();
var reportSight = require('./reportSight');

/** ---------- SUBROUTES ---------- **/
router.use('/reportSight', reportSight);

/**
 * GET private/index
 */
router.get('/', function (req, res) {
  res.redirect('/#!/sightings'); // they made it!
});

module.exports = router;
