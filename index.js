/// https://quickleft.com/blog/creating-and-publishing-a-node-js-module/


var Kitten = function(){

}

Kitten.prototype.setName = function(name) {
	this.name = name;
	return this;
}

Kitten.prototype.uppercaseName = function() {
	this.name = this.name.toUpperCase();
	return this;
}

Kitten.prototype.getName = function() {
	return this.name;
}

var charlie = new Kitten();
console.log('The cats name is : ' + charlie.setName('david').uppercaseName().getName());


var reversename = function(name) {
	return name.split('').reverse().join('');
};

var mynamespace = {

	getName : function() {
		return this.name
	},
	setName : function(name) {
		this.name = name;
	},
	obtainName : function (callback) {
		return callback(this.name);
	}
};

var df = mynamespace;

df.setName('alex');
console.log(df.getName());
console.log(df.obtainName(reversename));






var mortekai = {
	test: function(mget) {
		console.log('+++++++')
		var mm = { 
			get: mget.bind(mm)
        };
 
        return mm;
    }
};

var vvv = function dddd() {
	console.log( this.x);
};

console.log(mortekai);
console.log(mortekai.test(vvv));
console.log(mortekai.test(vvv));



var example = function() {
	console.log('a');
      return {
        add: function() {
        	console.log('c');
        },
         subtract: function() {
        	console.log('d');
        }
      };
  };

example().add();
example().subtract();



var obj =  {
        add: function() {
        	console.log('CC');
        },
         subtract: function() {
        	console.log('DD');
        }

      };

obj.add();
obj.subtract();
      //console.log(obj.subtract());



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

