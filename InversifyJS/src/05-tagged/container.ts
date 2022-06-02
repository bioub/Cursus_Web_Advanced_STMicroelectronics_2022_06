import 'reflect-metadata';

import { Container } from 'inversify'
import { ConsoleWriter } from "./ConsoleWriter.js";
import { Logger } from './Logger.js';
import { WriterInterface } from './WriterInterface.js';
import { FileWriter } from './FileWriter.js';

export const container = new Container();
container.bind(WriterInterface).to(ConsoleWriter).whenTargetTagged('APP_ENV', 'dev');
container.bind(WriterInterface).toDynamicValue(() => {
  return new FileWriter('app.log');
}).whenTargetTagged('APP_ENV', 'prod');;


container.bind(Logger).toSelf();

