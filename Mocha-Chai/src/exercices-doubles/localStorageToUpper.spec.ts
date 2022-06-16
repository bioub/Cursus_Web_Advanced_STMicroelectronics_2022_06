import { expect } from "chai";
import { localStorageToUpper } from "./localStorageToUpper";

globalThis.localStorage = {
  getItem(key: string) {
    return 'VALUE';
  }
} as any;

describe('localStorageToUpper function', () => {
  it('should return an uppercase val in localStorage', () => {
    expect(localStorageToUpper('token')).to.equal('VALUE');
  });
});
