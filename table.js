'use strict'



var table = function (domId) {

	this.domId = domId;

};

table.prototype.getTableId = function() {

	return this.domId;

};


module.exports = table;