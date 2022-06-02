import { ContainerModule } from "inversify";
import { Logger } from "./Logger.js";


export const loggerModule = new ContainerModule((bind) => {
  bind(Logger).toSelf().inSingletonScope();
});
