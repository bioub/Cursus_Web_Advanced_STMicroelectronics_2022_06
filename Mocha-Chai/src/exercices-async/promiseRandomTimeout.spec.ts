import { expect } from "chai";
import { promiseRandomTimeout } from "./promiseRandomTimeout";
import sinon from 'sinon';

describe('promiseRandomTimeout function', () => {
  it('should resolves value in random delay', async () => {
    const fakeTimers = sinon.useFakeTimers();

    const promise = promiseRandomTimeout('val');
    fakeTimers.tick(1000);
    const val = await promise;
    expect(val).to.equal('val');

    fakeTimers.restore();
  });
});
