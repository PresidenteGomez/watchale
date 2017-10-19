/** ---------- REQUIRE NODE MODULES ---------- **/
var express = require('express');
var path = require('path');
// require('dotenv').config();
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
/** ---------- REQUIRE CUSTOM APP MODULES ---------- **/
var passport = require('./auth/passport');
var configs = require('./config/auth');
var index = require('./routes/index');
var auth = require('./routes/auth');
var isLoggedIn = require('./utils/auth');
var private = require('./routes/private/index');
var database = require('./utils/database');
// var request = require('request');
/** ---------- EXPRESS APP CONFIG ---------- **/

app.use(express.static('public')); 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
/** ---------- DATABASE CONNECTION HANDLING ---------- **/
database();
/** ---------- SESSION CREATION AND STORAGE ---------- **/
/**
 * Creates session that will be stored in memory.
 * @todo Before deploying to production,
 * configure session store to save to DB instead of memory (default).
 * @see {@link https://www.npmjs.com/package/express-session}
 */
app.use(session({
  secret: configs.sessionVars.secret,
  key: 'user',
  resave: 'true',
  saveUninitialized: false,
  cookie: { maxage: 60000, secure: false },
}));
/** ---------- PASSPORT ---------- **/
app.use(passport.initialize()); // kickstart passport
/**
 * Alters request object to include user object.
 * @see {@link auth/passport}
 */
app.use(passport.session());
/** ---------- ROUTES ---------- **/
app.use('/auth', auth);
app.use('/private', isLoggedIn, private);
app.use('/', index);

// API Key & username are environment variables in Heroku
var username = process.env.USER_NAME;
var oauthToken = process.env.GIT_TOKEN;

/** ---------- SERVER START ---------- **/
var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Now running on port ', port);
});
