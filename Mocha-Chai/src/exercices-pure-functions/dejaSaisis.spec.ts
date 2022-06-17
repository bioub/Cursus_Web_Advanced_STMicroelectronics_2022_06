import { expect } from "chai";
import { dejaSaisis } from "./dejaSaisis";

describe('dejaSaisis function', () => {
  it('should show phrase vous avez deja saisi', () => {
    expect(dejaSaisis([1, 2, 3, 4])).to.equal('Vous avez déjà saisi : 1 | 2 | 3 | 4')
  });
  it('should return undefined if no value', () => {
    expect(dejaSaisis([])).to.be.undefined;
  });
});
