/**
 * Handles all routing for private routes.
 *
 * @module routes/private/index
 */
var express = require('express');
var router  = express.Router();
var reportSight = require('./reportSight');
var adminRoute = require('./adminRoute');
var regUserRoute = require('./regUserRoute');


/** ---------- SUBROUTES ---------- **/
router.use('/reportSight', reportSight);
router.use('/adminRoute', adminRoute);
router.use('/regUserRoute', regUserRoute);

/**
 * GET private/index
 */
router.get('/', function (req, res) {
  res.redirect('/#!/report'); // they made it!
});

module.exports = router;
