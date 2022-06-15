import axios from "axios";

export class HttpClient {
  async get(url: string) {
    const res = await axios.get(url);
    return res.data;
  }
}
