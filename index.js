/// https://quickleft.com/blog/creating-and-publishing-a-node-js-module/
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

//console.log(addX(5));
/*
module.exports = {

  var t = function shabba(html) {
    var greeting = 'Hello ' + html;
    return greeting;
  }
}


module.exports = {
  doNothing: function shabba(html) {
    var greeting = 'Hello ' + html;
    return greeting;
  }
};
*/
