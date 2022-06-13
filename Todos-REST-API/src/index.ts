import http from 'http';
import app from './app';

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
