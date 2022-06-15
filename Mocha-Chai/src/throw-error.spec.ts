import { expect } from "chai";
import { throwErrorIfNotString } from "./throw-error";

describe('throwErrorIfNotString', () => {
  it('should not throw error', () => {
    throwErrorIfNotString('Hello');
    throwErrorIfNotString('Test');
  });
  it('should throw error', () => {
    expect(() => throwErrorIfNotString(123)).to.throw('val must be typed string')
  });
});
