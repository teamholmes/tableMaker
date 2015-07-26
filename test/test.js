var assert = require("assert");

var module = require('../index');

//var func = module.doNothing;



describe('Karma Test', function() {
  describe('Will pass initial test', function () {
   it('converts & into &amp;', function() {
    assert.equal(module.addX(5), 10);
    assert.equal(module.subtract(10,2), 8);
  });
  });
});