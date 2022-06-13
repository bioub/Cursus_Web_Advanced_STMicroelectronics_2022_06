import { Router } from "express";
import { listController } from "./controllers";

const routes = Router();

routes.get('/api/todos', listController);

export default routes;
