# Inversify

Create a `container.ts` that will export the `container` object

Add the `@injectable` decorator in the following class :

- `UserPage`
- `UserService`
- `HttpClient`
- `FakeHttpClient`

Define the injection Symbol in the `HttpClientInterface`

Use the `@inject` decorator in `UserService` to inject the `HttpClientInterface` key

In `container.ts` define the following services using the class as key and value (`.toSelf()`) :

- `UserPage`
- `UserService`
- `HttpClient`
- `FakeHttpClient`

Bind the `HttpClientInterface` Symbol to service `HttpClient`

Rewrite the `index.ts` and `UserService.test.ts` program (launch with `npm start` and `npm test`) to make it get their dependencies from the `container`

Using container snapshots, replace the binding of `HttpClientInterface` to service `FakeHttpClient` in the test only :
https://github.com/inversify/InversifyJS/blob/master/wiki/container_snapshots.md
