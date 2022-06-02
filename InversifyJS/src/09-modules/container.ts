import 'reflect-metadata';

import { Container } from 'inversify'
import { loggerModule } from './logger/container.js';
import { writerModule } from './writer/container.js';

export const container = new Container();

container.load(writerModule);
container.load(loggerModule);
