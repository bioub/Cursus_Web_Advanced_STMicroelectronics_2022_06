import 'reflect-metadata';

import { Container } from 'inversify'
import { ConsoleWriter } from "./ConsoleWriter.js";
import { Logger } from './Logger.js';
import { WriterInterface } from './WriterInterface.js';
import { FileWriter } from './FileWriter.js';

export const container = new Container({
  defaultScope: 'Singleton',
});
container.bind(ConsoleWriter).toSelf();
container.bind(FileWriter).toDynamicValue(() => {
  return new FileWriter('app.log');
});

if (process.env.APP_ENV === 'dev') {
  container.bind(WriterInterface).toService(ConsoleWriter);
} else {
  container.bind(WriterInterface).toService(FileWriter);
}

container.bind(Logger).toSelf();

