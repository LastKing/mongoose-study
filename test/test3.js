/**
 * Created by toonew on 2016/3/11.
 */
var Test = require('../modals/index').People;

Test.find(function (err, result) {
  console.log(result);
});