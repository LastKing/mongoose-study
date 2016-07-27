/**
 * Created by Rain on 2016/7/27.
 */
var Person = require('./connect/conect').Person;

// find each person with a last name matching 'Ghost'
var query = Person.findOne({'englishName.last': 'li'});

// 意思就是只选择 这两个元素
query.select('englishName occupation');

// execute the query at a later time
query.exec(function (err, person) {
  if (err) return handleError(err);
  console.log('%s %s is a %s.', person.englishName.first, person.englishName.last, person.occupation);
  // Space Ghost is a talk show host.
});