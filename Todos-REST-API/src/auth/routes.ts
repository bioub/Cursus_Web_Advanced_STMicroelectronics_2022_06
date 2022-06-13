import express, { Router } from 'express';
import { loginController } from './controllers';

const routes = Router();

routes.post('/login', express.json(), loginController);

export default routes;
