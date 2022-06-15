import { expect } from 'chai';
import { sum } from './maths';

describe('maths functions', () => {
  describe('sum function', () => {
    it('should add positive numbers', () => {
      expect(sum(1, 2)).to.equal(3);
      expect(sum(5, 3)).to.equal(8);
    });
    it('should add negative numbers', () => {
      expect(sum(-1, -2)).to.equal(-3);
      expect(sum(-5, -3)).to.equal(-8);
    });
  });

  describe('multiply function', () => {});
});
