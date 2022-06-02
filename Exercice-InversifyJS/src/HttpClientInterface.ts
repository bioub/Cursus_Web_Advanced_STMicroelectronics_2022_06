export const HttpClientInterface = Symbol('HttpClientInterface');
export interface HttpClientInterface {
  get<T>(url: string): Promise<T>;
}
