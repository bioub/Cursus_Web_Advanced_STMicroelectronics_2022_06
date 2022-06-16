import { expect } from "chai";
import { genererAlea } from "./genererAlea";
import { mock } from 'sinon'

describe('genererAlea function', () => {
  it('should return number', () => {
    // const backup = Math.random;
    // Math.random = () => 0.1;
    const mockMath = mock(Math);

    mockMath.expects('random').once().returns(0.1);

    expect(genererAlea(0, 100)).to.equal(10);

    mockMath.verify();
    // Math.random = backup;
  });
});
