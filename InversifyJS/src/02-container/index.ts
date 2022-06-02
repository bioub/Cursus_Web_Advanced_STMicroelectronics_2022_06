import { container } from "./container.js";
import { Logger } from "./Logger.js";

const logger1 = container.get(Logger);
const logger2 = container.get(Logger);

await logger1.log('Message');

console.log(logger1 === logger2); // est-ce le même objet ?
