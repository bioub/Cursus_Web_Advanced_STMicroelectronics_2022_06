import express, { Router } from 'express';
import { authenticate } from '../auth/middleware';
import {
  createController,
  listController,
  showController,
} from './controllers';

const routes = Router();

// Convention Restful
// List -> GET /resources
// Show -> GET /resources/:id
routes.get('/', authenticate, listController);
routes.get('/:id', authenticate, showController);

// prettier-ignore
routes.post('/',
  authenticate,
  express.json(),
  createController,
);

export default routes;
