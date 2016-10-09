/**
 * Created by Rain on 2016/8/12.
 */
var Person = require('./connect/conect').Person;

//静态方法 和 动态放的测试

function personTest() {
  Person.speak().then((result)=> {
    console.log(result)
  });

  var person = new Person();
  person.name = 'test2';
  person.englishName = {
    first: 'toonew',
    last: 'li'
  };
  person.save();


  // Person.find({}, function (err, result) {
  //   console.log(result);
  // })
  person.speak().then((result)=> {
    console.log(result[0]._id);
    // console.log(result);
  });
}

personTest();