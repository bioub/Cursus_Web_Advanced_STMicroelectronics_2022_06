import net from 'net';

// const server = net.createServer()
// server.on('connection', (socket) => {});

const server = net.createServer((socket) => { // event connection
  console.log('client connected');
  socket.pipe(process.stdout);

  socket.write('HTTP/1.1 200 OK\r\n');
  socket.write('Content-type: text/html; charset=UTF-8\r\n');
  socket.write('\r\n');
  socket.write('<!DOCTYPE html>\r\n');
  socket.write('<html>\r\n');
  socket.write('<head></head>\r\n');
  socket.write('<body><h1>Hello</h1></body>\r\n');
  socket.write('</html>\r\n');
  socket.end('\r\n');
});

server.on('error', (err) => {
  if ((err as any).code === 'EADDRINUSE') {
    return console.log('Le port 3000 est occupé');
  }
  console.log(err);
});

server.listen(3000, () => { // event listening
  console.log('Server started on port 3000');
});
