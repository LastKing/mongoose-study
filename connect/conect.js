/**
 * Created by Rain on 2016/6/15.
 */
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

mongoose.connect(
    "mongodb://127.0.0.1/test",
    {
      server: {poolSize: 20},
    },
    function (error) {
      if (error) {
        console.error('connect to %s error: ', "mongodb://127.0.0.1/test", error.message);
        process.exit(1);
      }
    }
);
 
require('../models/person');

exports.Person = mongoose.model('Person');
