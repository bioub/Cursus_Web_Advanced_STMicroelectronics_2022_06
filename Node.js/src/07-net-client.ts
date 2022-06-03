import net from 'net';

const socket = net.createConnection(80, 'example.com')
socket.pipe(process.stdout);

socket.on('lookup', (err, address) => {
  console.log(address);
  console.log(net.isIP(address));
  console.log(net.isIPv4(address));
  console.log(net.isIPv6(address));
});

socket.on('connect', () => {
  socket.write('GET / HTTP/1.1\r\n');
  socket.write('Host: example.com\r\n');
  socket.end('\r\n');
});
