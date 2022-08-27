const fs = require('fs');

console.log('시작');
let data = fs.readFileSync('./readme2.rtf');
console.log('1번', data.toString());
data = fs.readFileSync('./readme2.rtf');
console.log('2번', data.toString());
data = fs.readFileSync('./readme2.rtf');
console.log('3번', data.toString());
console.log('끝');