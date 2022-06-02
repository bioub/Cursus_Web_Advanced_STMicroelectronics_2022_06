import { ContainerModule } from "inversify";
import { ConsoleWriter } from "./ConsoleWriter.js";
import { FileWriter } from "./FileWriter.js";
import { WriterInterface } from "./WriterInterface.js";

export const writerModule = new ContainerModule((bind) => {
  bind(ConsoleWriter).toSelf().inSingletonScope();
  bind(FileWriter).toDynamicValue(() => {
    return new FileWriter('app.log');
  }).inSingletonScope();;

  if (process.env.APP_ENV === 'dev') {
    bind(WriterInterface).toService(ConsoleWriter);
  } else {
    bind(WriterInterface).toService(FileWriter);
  }
});


