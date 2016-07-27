/**
 * Created by Rain on 2016/6/15.
 */
var mongoose = require('mongoose');

var db = mongoose.createConnection('mongodb://localhost:27017/test', {promiseLibrary: require('bluebird')});
db.on('error', console.error.bind(console, '连接错误'));

var num = 0;
db.once('open', function () {
  console.log(num++)
});

require('./../models/person');


// module.exports.Person = mongoose.model('Person');
module.exports.Person = db.model('Person');

