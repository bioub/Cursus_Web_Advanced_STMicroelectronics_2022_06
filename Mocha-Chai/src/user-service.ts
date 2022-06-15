import { HttpClient } from "./http-client";

export class UserService {
  async fetchUsers() {
    const httpClient = new HttpClient();
    return await httpClient.get('https://jsonplaceholder.typicode.com/users');
  }
}
