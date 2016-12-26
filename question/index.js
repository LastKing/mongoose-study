var mongoose = require('mongoose');

mongoose.Promise = Promise;

var db = mongoose.createConnection('mongodb://localhost:27017/test');
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (err) {
  console.log(err);
});

require('./userSchema');

module.exports.UserModel = db.model('User');
