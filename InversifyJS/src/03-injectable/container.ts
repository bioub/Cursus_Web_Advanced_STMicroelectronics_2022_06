import 'reflect-metadata';

import { Container } from 'inversify'
import { ConsoleWriter } from "./ConsoleWriter.js";
import { Logger } from './Logger.js';

export const container = new Container();
// container.bind(ConsoleWriter).to(ConsoleWriter);
container.bind(ConsoleWriter).toSelf();
container.bind(Logger).toSelf();

