/**
 * Created by Rain on 2016/6/15.
 */
var Person = require('./connect/createConnection').Person;

function personTest(cb) {
  Person.find({}, cb);
}

personTest(function (err, result) {
  console.log(result)
});