/**
 * Created by Rain on 2016/12/9.
 */
var UserModel = require('./index').UserModel;

function Person(){
  var user = new UserModel();

  user.username = 'test';
  user.password = 'test';

  user.save();
}
Person();
