import 'reflect-metadata';

import { Container } from 'inversify'
import { ConsoleWriter } from "./ConsoleWriter.js";
import { Logger } from './Logger.js';
import { WriterInterface } from './WriterInterface.js';
import { FileWriter } from './FileWriter.js';

export const container = new Container();
container.bind(ConsoleWriter).toSelf().inSingletonScope();
container.bind(FileWriter).toDynamicValue(() => {
  return new FileWriter('app.log');
}).inSingletonScope();

if (process.env.APP_ENV === 'dev') {
  container.bind(WriterInterface).toService(ConsoleWriter);
} else {
  container.bind(WriterInterface).toService(FileWriter);
}

container.bind(Logger).toSelf().inSingletonScope();

