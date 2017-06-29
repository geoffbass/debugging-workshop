var expect = require('chai').expect;

// Don't change any code in this file... that's cheating!
// Instead, you'll have to figure out why all the tests are failing and change
// something to make each one pass...
describe('Tests:', function () {
  describe('Descriptions won\'t help you here. You\'ll need to read the test code!', function () {
    it('test #1', function () {
      var secretNumber = require('../src/secretNumber');
      expect(secretNumber).to.equal(42);
    });

    it('test #2', function () {
      var funcToFix = require('../src/funcToFix');
      expect(funcToFix(5)).to.be.true;
      expect(funcToFix(6)).to.be.false;
    });
  });
});
