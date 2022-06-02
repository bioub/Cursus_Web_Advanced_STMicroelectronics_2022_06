import { container } from "./container.js";
import { Logger } from "./Logger.js";

const logger = container.get('logger') as Logger;

await logger.log('Message');
