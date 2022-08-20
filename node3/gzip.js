const zlib = require('zlib');
const fs = require('fs');

const readStream = fs.createReadStream('./readme4.rtf');
const zlibStream = zlib.createGzip();
const writeStream = fs.createWriteStream('./readm4.rtf.gz');

readStream.pipe(zlibStream).pipe(writeStream);