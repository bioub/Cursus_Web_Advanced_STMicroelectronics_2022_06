import { inject, injectable, tagged } from "inversify";
import { WriterInterface } from "./WriterInterface.js";

@injectable()
export class Logger {
  constructor(@inject(WriterInterface) @tagged('APP_ENV', process.env.APP_ENV) private writer: WriterInterface) {}

  async log(msg: string) {
    const formatted = `${new Date().toISOString()} - ${msg}\n`;
    await this.writer.write(formatted);
  }
}
