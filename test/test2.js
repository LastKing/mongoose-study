/**
 * Created by toonew on 2016/3/8.
 */
var mongoose = require('mongoose');    //引用mongoose模块
var db = mongoose.createConnection('localhost', 'test'); //创建一个数据库连接

//3.打开本机localhost的test数据库时，我们可以监测是否有异常
db.on('error', console.error.bind(console, '连接错误:'));
db.once('open', function () {
  //一次打开记录
});
//注意：
//
//成功开启数据库后，就可以执行数据库相应操作，假设以下代码都在回调中处理


//4.定义一个Schema
var PersonSchema = new mongoose.Schema({
  name: String   //定义一个属性name，类型为String
});


//5.将该Schema发布为Model
var PersonModel = db.model('Person', PersonSchema);
//如果该Model已经发布，则可以直接通过名字索引到，如下：
//var PersonModel = db.model('Person');
//如果没有发布，上一段代码将会异常


//6.用Model创建Entity
var personEntity = new PersonModel({name: 'Krouky2'});
//打印这个实体的名字看看
console.log(personEntity.name); //Krouky
personEntity.save();


//7.我们甚至可以为此Schema创建方法

//为Schema模型追加speak方法
PersonSchema.methods.speak = function () {
  console.log('我的名字叫' + this.name);
};
var PersonModel2 = db.model('Person2', PersonSchema);
var personEntity2 = new PersonModel2({name: 'Krouky'});
personEntity2.speak();//我的名字叫Krouky

personEntity2.save(function (err, PersonModel2) {
  if (err) return console.error(err);
  PersonModel2.speak();
});
