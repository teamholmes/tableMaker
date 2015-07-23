var assert = require("assert");

var module = require('../index');

var func = module.doNothing;

describe('Karma Test', function() {
  describe('Will pass initial test', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    });
  });
});


describe('Karma Test', function() {
  describe('Will pass initial test', function () {
    it('converts & into &amp;', function() {
    assert.equal(func('Russell'), 'Hello Russell');
  });
  });
});