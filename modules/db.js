var mongoose = require ('mongoose');

var mongoURI = '';
// process.env.MONGODB_URI will only be defined if you are running on Heroku

if (process.env.MONGODB_URI != undefined) {
    // use the string value of the environment variable
    mongoURI = process.env.MONGODB_URI;
} else {
    // use the local database server
    mongoURI = 'mongodb://localhost:27017/watchale';
}

var mongoDB = mongoose.connect(mongoURI, {useMongoClient: true}).connection;

mongoose.connection.on('error', function (err) {
    console.log('MONGO ERROR: ', err);
});

mongoose.connection.once('open', function () {
    console.log('Conencted to Mongo!');
})

module.exports = mongoDB;