const url = require('url');
const querystring = require('querystring');

const parsedUrl = url.parse('http://www.test.co.kr/?a=3&limit=10&search=test&search=test3');
const query = querystring.parse(parsedUrl.query);
console.log('querystring.parse(): ', query);
console.log('querystring.stringify(): ', querystring.stringify(query));