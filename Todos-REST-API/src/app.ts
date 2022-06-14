import express, { NextFunction, Request, Response } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import authRoutes from './auth/routes';
import todosRoutes from './todos/routes';
import usersRoutes from './users/routes';

const app = express();

// Middlewares globaux

// app.use((req, res, next) => { // 1
//   console.log(req.method + ' ' + req.url);
//   next();
// });
app.use(morgan('dev')); // 1

// app.use((req, res, next) => { // 2
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   next();
// });
app.use(cors()); // 2

// charge les routes de todos
app.use('/api/auth', authRoutes); // 3
app.use('/api/todos', todosRoutes); // 4
app.use('/api/users', usersRoutes); // 4

app.use('/api', (req, res, next) => { // 5
  res.status(404).json({
    msg: 'Not found',
  });
});

app.use('/api', (err: Error, req: Request, res: Response, next: NextFunction) => { // 5
  res.status(500).json({
    msg: 'Error',
  });
});

export default app;
