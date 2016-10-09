/**
 * Created by toonew on 2016/3/8.
 */
//官方demo
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;

db.on('err', console.error.bind(console, 'connection error:'));

db.once('open', function () {
  console.log('回调成功');
});

var kittySchema = mongoose.Schema({
  name: String
});

//var Kitten = mongoose.model('Kitten', kittySchema);

//var silence = new Kitten({ name: 'Silence' });
//console.log(silence.name); // 'Silence'

// NOTE: methods must be added to the schema before compiling it with mongoose.model()
kittySchema.methods.speak = function () {
  var greeting = this.name
      ? "Meow name is " + this.name
      : "I don't have a name";
  console.log(greeting);
};

var Kitten = mongoose.model('Kitten', kittySchema);

var fluffy = new Kitten({name: 'fluffy'});
fluffy.speak(); // "Meow name is fluffy"

fluffy.save(function (err, fluffy) {
  if (err) return console.error(err);
  fluffy.speak();
});

Kitten.find(function (err, kittens) {
  if (err)return console.log(err);
  console.log(kittens);
});