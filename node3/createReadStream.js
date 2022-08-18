const fs = require('fs');

const readStream = fs.createReadStream('./readme3.rtf', {highWaterMark: 16});
const data = [];

readStream.on('data', (chunk) => {
    data.push(chunk);
    console.log('data : ', chunk, chunk.length);
});

readStream.on('end', () => {
    console.log('end: ', Buffer.concat(data).toString());
});

readStream.on('error', (err) => {
    console.log('errro: ', err);
});

//createReadStream(읽을 파일 경로, {highWaterMaker: 버퍼의 크기})
//highWaterMaker의 기본은 64KB