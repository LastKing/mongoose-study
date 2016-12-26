/**
 * Created by Rain on 2016/6/15.
 */
var Person = require('./connect/createConnection').Person;

async function personTest() {
  var person = new Person();
  person.name = 'test';
  // xxx.age && (person.age = xxx.age);
  // person.save();

  Person.find({}, function (err, result) {
    console.log(result);
  });//这个返回的 result 是 model

  var test1 = Person.find({});
  console.log(test1);//这个返回的是query

  var test2 = Person.find({}).select('_id');  //query中带有 then方法，可以await
  var result = await test2;                  //await之后  返回的query 会变化成 model
  console.log(result);
}

personTest();