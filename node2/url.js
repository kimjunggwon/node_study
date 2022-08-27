const url = require('url');

const { URL } = url;
const myURL = new URL('http://test.co.kr/test/test.php?a=123#test123');
console.log('new URL(): ', myURL);
console.log('url.format(): ', url.format(myURL));
console.log('---------------------');
const parseUrl = url.parse('http://test.co.kr/test/test.php?a=123#test123');
console.log('url.parse(): ', parseUrl);
console.log('url.format(): ', url.format(parseUrl));