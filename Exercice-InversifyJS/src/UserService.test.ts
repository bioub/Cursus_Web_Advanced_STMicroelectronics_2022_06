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

describe('UserService', () => {
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

  it('fetchUsers resolves users (FakeHttpClient)', async () => {
    container.unbind(HttpClientInterface);
    container.bind(HttpClientInterface).toService(FakeHttpClient);

    const httpClient = container.get(FakeHttpClient);
    httpClient.setFakeData([{ name: 'Toto' }]);

    const userService = container.get(UserService);
    const users = await userService.fetchUsers();
    expect(users[0].name).toBe('Toto');
  });

  it('fetchUsers resolves users (HttpClient)', async () => {
    const userService = container.get(UserService);
    const users = await userService.fetchUsers();
    expect(users[0].name).toBe('Leanne Graham');
  });
});
