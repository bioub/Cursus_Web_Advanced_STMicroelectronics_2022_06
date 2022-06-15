import { expect } from "chai";
import { thatReturnPromise } from "./timeout";
import sinon, { SinonFakeTimers } from 'sinon';

describe('thatReturnPromise', () => {

  let fakeTimers: SinonFakeTimers;

  beforeEach(() => {
    fakeTimers = sinon.useFakeTimers();
  });

  afterEach(() => {
    fakeTimers.restore();
  });

  it('should resolve ABC', async () => {
    const promise = thatReturnPromise();
    fakeTimers.tick(10000);
    const val = await promise;
    expect(val).to.equal('ABC');
  });
});
