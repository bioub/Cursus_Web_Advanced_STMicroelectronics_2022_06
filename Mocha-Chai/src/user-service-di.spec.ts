import chai, { expect } from 'chai';
import { HttpClient } from './http-client';
import { UserService } from './user-service-di';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

chai.use(sinonChai);

describe('UserService class', () => {
  describe('fetchUsers method', () => {
    it('should resolves to an array of User', async () => {
      const httpClient = new HttpClient();
      const userService = new UserService(httpClient);

      const users = await userService.fetchUsers();

      expect(users[0].name).to.equal('Leanne Graham');
    });
    it('should resolves to an array of User (sinon stub)', async () => {
      const httpClient = new HttpClient();
      // HttpClient.prototype.get = sinon.stub().callsFake(() => Promise.resolve([{name: 'Romain'}]));
      // HttpClient.prototype.get = sinon.stub().returns(Promise.resolve([{name: 'Romain'}]));
      const spy = sinon.stub().resolves([{ name: 'Romain' }]);
      httpClient.get = spy;
      const userService = new UserService(httpClient);

      const users = await userService.fetchUsers();

      expect(users[0].name).to.equal('Romain');
      expect(spy).to.have.been.calledOnceWithExactly(
        'https://jsonplaceholder.typicode.com/users',
      );
    });
    it('should resolves to an array of User (sinon mock)', async () => {
      const httpClient = new HttpClient();

      const mock = sinon.mock(httpClient);
      mock.expects('get').once().resolves([{ name: 'Romain' }]);

      const userService = new UserService(httpClient);

      const users = await userService.fetchUsers();

      expect(users[0].name).to.equal('Romain');
      mock.verify();
    });
  });
});
