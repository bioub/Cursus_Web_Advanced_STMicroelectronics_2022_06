import { expect } from "chai";
import { totalPairs } from "./totalPairs";

describe('totalPairs function', () => {
  it('should count the evens number in an array ', () => {
    expect(totalPairs([1, 2, 3, 4, 5])).to.equal(2);
  });
});
