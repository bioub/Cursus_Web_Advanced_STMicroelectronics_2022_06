import { HttpClientInterface } from "./HttpClientInterface";
import { User } from "./model";

export class UserService {
  constructor(private httpClient: HttpClientInterface) {}
  async fetchUsers() {
    return await this.httpClient.get<User[]>('http://localhost:3000/users');
  }
}