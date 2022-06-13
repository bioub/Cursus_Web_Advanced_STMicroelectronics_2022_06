import express from 'express';
import todosRoutes from './todos/routes'

const app = express();

// charge les routes de todos
app.use(todosRoutes);

export default app;
