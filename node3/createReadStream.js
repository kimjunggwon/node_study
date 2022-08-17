const fs = require('fs');

const readStream = fs.createReadStream('./readme3.rtf', {highWaterMark: 16});
const data = [];

readStream.on('data', (chunk) => {
    data.push(chunk);
    console.log('data : ', chunk, chunk.length);
});

