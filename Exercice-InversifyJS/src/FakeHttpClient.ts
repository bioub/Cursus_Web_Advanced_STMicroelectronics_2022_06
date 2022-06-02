import { injectable } from 'inversify';
import { HttpClientInterface } from './HttpClientInterface';

@injectable()
export class FakeHttpClient implements HttpClientInterface {
  private data!: any;

  async get<T>(url: string): Promise<T> {
    return this.data;
  }

  setFakeData(data: any): void {
    this.data = data;
  }
}
