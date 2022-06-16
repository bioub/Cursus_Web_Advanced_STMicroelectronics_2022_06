import { expect, assert, should } from "chai";
import { hello } from "./hello";

should();

describe('hello function', () => {
  it('should return hello followed by name', () => {
    assert.equal(hello('Romain'), 'Hello Romain');
    expect(hello('Romain')).to.equal('Hello Romain');
    hello('Romain').should.be.equal('Hello Romain');
  });
});
