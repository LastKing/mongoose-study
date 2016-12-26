var mongoose = require('mongoose');

var UserSchema =new mongoose.Schema({
  username: {type: String},
  password: {type: Number}
});

mongoose.model('User', UserSchema);
