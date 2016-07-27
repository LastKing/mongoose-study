/**
 * Created by Rain on 2016/6/15.
 */
var Person = require('./connect/createConnection').Person;

function personTest() {
  return Person.find({}).exec();
}

personTest().then(result=>console.log(result));