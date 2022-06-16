import { expect } from "chai";
import { racineCarre } from "./racineCarre";

describe('racineCarre function', () => {
  it('should return sqrt', () => {
    expect(racineCarre(4)).to.equal(2);
  });
  it('should throw an error', () => {
    expect(() => racineCarre(-1)).to.throw()
  });
});
