import { container } from "./container.js";

import { ConsoleWriter } from "./ConsoleWriter.js";
import { Logger } from "./Logger.js";


const logger = container.get(Logger);
await logger.log('Message');
