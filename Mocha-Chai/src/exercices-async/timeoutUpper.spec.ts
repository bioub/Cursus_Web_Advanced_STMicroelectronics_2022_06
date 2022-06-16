import { expect } from "chai";
import sinon from 'sinon';
import { timeoutUpper } from "./timeoutUpper";

describe('timeoutUpper function', () => {
  it('should resolves value in random delay', (done) => {
    //const fakeTimers = sinon.useFakeTimers();

    timeoutUpper('val', (val) => {
      expect(val).to.equal('VAL');
      done();
    });

    // fakeTimers.restore();
  });
});
