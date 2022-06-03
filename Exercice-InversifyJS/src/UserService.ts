import { inject, injectable } from "inversify";
import { HttpClientInterface } from "./HttpClientInterface";
import { User } from "./model";

@injectable()
export class UserService {
  @inject(HttpClientInterface) private httpClient!: HttpClientInterface;

  // constructor(@inject(HttpClientInterface) private httpClient: HttpClientInterface) {}

  async fetchUsers() {
    return await this.httpClient.get<User[]>('http://localhost:3000/users');
  }
}
