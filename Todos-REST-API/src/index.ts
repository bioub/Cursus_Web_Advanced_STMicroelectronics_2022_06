import http from 'http';
import mongoose from 'mongoose';
import app from './app';

mongoose.connect('mongodb://localhost:27017/test');

const server = http.createServer(app);

server.on('error', (err) => {
  if ((err as any).code === 'EADDRINUSE') {
    return console.log('Le port 3000 est occupé');
  }
  console.log(err);
});

server.listen(3000, () => {
  console.log('Server started on port 3000');
});
