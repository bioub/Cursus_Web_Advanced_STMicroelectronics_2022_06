import fs from 'fs';
import zlib from 'zlib';

const rs = fs.createReadStream('.prettierrc');
const ws = fs.createWriteStream('.prettierrc.copy');
const wszip = fs.createWriteStream('.prettierrc.zip');

// Terminal POSIX
// cat .prettierrc | echo
rs.pipe(process.stdout);
// cat .prettierrc > .prettierrc.copy
rs.pipe(ws);
// cat .prettierrc | zip > .prettierrc.copy
rs.pipe(zlib.createGzip()).pipe(wszip);

// Stream
// ReadStream : lecture (method read)
// ex : fs.createReadStream / process.stdin
// WriteStream : ecriture (method write)
// ex : fs.createWriteStream / process.stdout
// DuplexStream : lecture + ecriture (methods read and write)
// socket tcp
// Transform : lecture + transformation + ecriture (methods read and write)
// zlib

// rs.on('open', () => {
//   console.log('file open');
// });

// rs.on('data', (chunk) => {
//   console.log(chunk.toString('utf-8'));
// });
