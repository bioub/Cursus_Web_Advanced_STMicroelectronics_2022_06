import { HttpClient } from "./http-client";

export class UserService {
  constructor(private httpClient: HttpClient) {}

  async fetchUsers() {
    return await this.httpClient.get('https://jsonplaceholder.typicode.com/users');
  }
}
