import express, { Router } from 'express';
import { authenticate } from '../auth/middleware';
import {
  createController,
  deleteController,
  listController,
  replaceController,
  showController,
  updateController,
} from './controllers';

const routes = Router();

routes.get('/', /*authenticate,*/ listController);
routes.get('/:id', /*authenticate,*/ showController);

// prettier-ignore
routes.post('/',
  /*authenticate,*/
  express.json(),
  createController,
);

routes.put('/:id', /*authenticate,*/ express.json(), replaceController);
routes.patch('/:id', /*authenticate,*/ express.json(), updateController);
routes.delete('/:id', /*authenticate,*/ deleteController);

export default routes;
