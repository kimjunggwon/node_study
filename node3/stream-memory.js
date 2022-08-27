const fs = require('fs');

console.log('before: ', process.memoryUsage().rss);

const readStream = fs.createReadStream('./big.rtf');
const writeStream = fs.createWriteStream('./big3.rtf');
readStream.pipe(writeStream);
readStream.on('end', () => {
    console.log('stream: ', process.memoryUsage().rss);
});