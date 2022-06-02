import fs from "fs";
import { WriterInterface } from "./WriterInterface.js";

export class FileWriter implements WriterInterface {
  constructor(private filePath: string) {}

  async write(msg: string) {
    await fs.promises.appendFile(this.filePath, msg);
  }
}
