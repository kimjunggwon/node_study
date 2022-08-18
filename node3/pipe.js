const fs = require('fs');

const readStream = fs.createReadStream('readme4.rtf');
const writeStream = fs.createWriteStream('writeme3.rtf');

readStream.pipe(writeStream);