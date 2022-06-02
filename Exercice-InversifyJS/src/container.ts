import 'reflect-metadata';

import { Container } from 'inversify';
import { FakeHttpClient } from './FakeHttpClient';
import { HttpClient } from './HttpClient';
import { UserPage } from './UserPage';
import { UserService } from './UserService';
import { HttpClientInterface } from './HttpClientInterface';

export const container = new Container();

container.bind(FakeHttpClient).toSelf().inSingletonScope();
container.bind(HttpClient).toSelf().inSingletonScope();
container.bind(UserPage).toSelf().inSingletonScope();
container.bind(UserService).toSelf().inSingletonScope();

container.bind(HttpClientInterface).toService(HttpClient);
