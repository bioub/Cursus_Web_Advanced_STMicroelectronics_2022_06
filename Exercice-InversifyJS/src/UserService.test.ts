import { container } from './container';
import { FakeHttpClient } from './FakeHttpClient';
import { HttpClientInterface } from './HttpClientInterface';
import { UserService } from './UserService';

// test('fetchUsers resolves users', async () => {
//   const httpClient = new FakeHttpClient();
//   httpClient.setFakeData([{name: 'Toto'}])

//   container.unbind(HttpClientInterface);
//   container.bind(HttpClientInterface).toConstantValue(httpClient);

//   const userService = container.get(UserService);
//   const users = await userService.fetchUsers();
//   expect(users[0].name).toBe('Toto');
// });

describe('UserService class', () => {
  beforeEach(() => {
    // create a snapshot so each unit test can modify
    // it without breaking other unit tests
    container.snapshot();
  });

  afterEach(() => {
    // Restore to last snapshot so each unit test
    // takes a clean copy of the application container
    container.restore();
  });

  describe('fetchUsers method', () => {
    it('should resolves users from FakeHttpClient (injected with toSelf)', async () => {
      // container.unbind(HttpClientInterface);
      // container.bind(HttpClientInterface).toService(FakeHttpClient);
      container.rebind(HttpClientInterface).toService(FakeHttpClient);

      const httpClient = container.get(FakeHttpClient);
      httpClient.setFakeData([{ name: 'Toto' }]);

      const userService = container.get(UserService);
      const users = await userService.fetchUsers();
      expect(users[0].name).toBe('Toto');
    });

    it('should resolves users from FakeHttpClient (injected with toConstantValue)', async () => {
      const httpClient = new FakeHttpClient();
      httpClient.setFakeData([{ name: 'Toto' }]);

      // container.unbind(HttpClientInterface);
      // container.bind(HttpClientInterface).toConstantValue(httpClient);
      container.rebind(HttpClientInterface).toConstantValue(httpClient);

      const userService = container.get(UserService);
      const users = await userService.fetchUsers();
      expect(users[0].name).toBe('Toto');
    });

    it('should resolves users from HttpClient', async () => {
      const userService = container.get(UserService);
      const users = await userService.fetchUsers();
      expect(users[0].name).toBe('Leanne Graham');
    });
  });
});
