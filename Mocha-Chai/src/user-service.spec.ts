import chai, { expect } from 'chai';
import { HttpClient } from './http-client';
import { UserService } from './user-service';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

chai.use(sinonChai);

describe('UserService class', () => {
  describe('fetchUsers method', () => {
    it('should resolves to an array of User (sinon mock)', async () => {
      const mock = sinon.mock(HttpClient.prototype);
      mock.expects('get').once().resolves([{ name: 'Romain' }]);

      const userService = new UserService();
      const users = await userService.fetchUsers(); // new HttpClient

      expect(users[0].name).to.equal('Romain');
      mock.verify();
    });
  });
});
