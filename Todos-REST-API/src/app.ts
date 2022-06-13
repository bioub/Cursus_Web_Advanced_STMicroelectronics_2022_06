import express from 'express';
import todosRoutes from './todos/routes'

const app = express();

// Middlewares globaux
app.use(express.json());

// charge les routes de todos
app.use('/api/todos', todosRoutes);

export default app;
