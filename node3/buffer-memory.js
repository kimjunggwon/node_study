const fs = require('fs');

console.log('before: ', process.memoryUsage().rss);

const data1 = fs.readFileSync('./big.rtf');
fs.writeFileSync('./big2.rtf', data1);
console.log('buffer: ', process.memoryUsage().rss);