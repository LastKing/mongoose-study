/**
 * Created by Rain on 2016/6/15.
 */
var Person = require('./connect/createConnection').Person;

function personTest() {
  var person = new Person();
  person.name = 'test';
  xxx.age && (person.age = xxx.age);
  person.save();

  Person.find({}, function (err, result) {
    console.log(result);
  })
}

personTest();