import { Container } from 'inversify'
import { ConsoleWriter } from "./ConsoleWriter.js";
import { FileWriter } from './FileWriter.js';
import { Logger } from "./Logger.js";
import { WriterInterface } from './WriterInterface.js';

export const container = new Container();

let writer: WriterInterface;

if (process.env.APP_ENV === 'dev') {
  writer = new ConsoleWriter();
} else {
  writer = new FileWriter('app.log');
}

const logger = new Logger(writer);

container.bind(Logger).toConstantValue(logger);
