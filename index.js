/// https://quickleft.com/blog/creating-and-publishing-a-node-js-module/

var tableModule = require('./table');

var x = 5;
var addX = function(value) {
  return value + x;
};

var subtract = function(value, v1) {
  return value - v1;
};

//module.exports.x = x;
module.exports.addX = addX;
module.exports.subtract = subtract;

var myTable = new tableModule('myspecialTable');
console.log(myTable.getTableId());

