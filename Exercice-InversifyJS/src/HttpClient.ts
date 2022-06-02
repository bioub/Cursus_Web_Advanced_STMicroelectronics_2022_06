import axios from "axios";
import { injectable } from "inversify";
import { HttpClientInterface } from "./HttpClientInterface";

@injectable()
export class HttpClient implements HttpClientInterface {
  async get<T>(url: string) {
    const res = await axios.get<T>(url);
    return res.data;
  }
}