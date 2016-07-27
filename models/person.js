/**
 * Created by Rain on 2016/6/15.
 */
var mongoose = require('mongoose');

var PersonSchema = new mongoose.Schema({
  name: {type: String},
  age: {type: Number, default: 4321},
  englishName: {
    first: {type: String},
    last: {type: String}
  }
});

PersonSchema.methods.speak = function () {
  return this.model('Person').find().exec();
};

PersonSchema.statics = {
  speak: function() {
    // console.log(this);
    return this.count({}).exec();
  }
};

mongoose.model('Person', PersonSchema);