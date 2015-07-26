var assert = require("assert");

var tableModule = require('../table');

describe('Table tests', function() {
  describe('Table creation', function () {
    it('it should create a new table object with my chosen dom id', function () {
    	var domId = 'testId';
		var newTable = new tableModule(domId);
      assert.equal(newTable.getTableId(), domId);
    });
  });
});
