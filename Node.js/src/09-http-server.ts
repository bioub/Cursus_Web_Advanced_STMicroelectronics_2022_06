import http, { IncomingMessage, ServerResponse } from 'http';

// const server = http.createServer();
// server.on('request', (req, res) => {});

// const cb = (req: IncomingMessage, res: ServerResponse) => {};
// const server = http.createServer(cb);

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    homePage(req, res);
  } else {
    notFound(req, res);
  }
});

function homePage(req: IncomingMessage, res: ServerResponse) {
  res.statusCode = 200;
  res.setHeader('Content-type', 'text/plain; charset=UTF-8');
  res.end('Home page\n');
  // Il FAUT appeler end
}

function notFound(req: IncomingMessage, res: ServerResponse) {
  res.statusCode = 404;
  res.setHeader('Content-type', 'text/plain; charset=UTF-8');
  res.end('Not Found\n');
}

server.on('error', (err) => {
  if ((err as any).code === 'EADDRINUSE') {
    return console.log('Le port 3000 est occupé');
  }
  console.log(err);
});

server.listen(3000, () => {
  // event listening
  console.log('Server started on port 3000');
});
