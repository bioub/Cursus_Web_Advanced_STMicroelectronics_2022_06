import { injectable } from "inversify";
import { ConsoleWriter } from "./ConsoleWriter.js";
import { WriterInterface } from "./WriterInterface.js";

@injectable()
export class Logger {
  constructor(private writer: ConsoleWriter) {}

  async log(msg: string) {
    const formatted = `${new Date().toISOString()} - ${msg}\n`;
    await this.writer.write(formatted);
  }
}
