import { Router } from "express";
import { createController, deleteController, listController, replaceController, showController, updateController } from "./controllers";

const routes = Router();

routes.get('/', listController);
routes.get('/:id', showController);
routes.post('/', createController);
routes.put('/:id', replaceController);
routes.patch('/:id', updateController);
routes.delete('/:id', deleteController);

export default routes;
