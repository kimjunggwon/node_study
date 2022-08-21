const http = require('http');

http.createServer((req, res) => {
    console.log(req.url, req.headers.cookie);
    res.writeHead(200, {'Set-Cookie':'cookie-data=test'});
    res.end('Hello Cookie');
})
//req.headers.cookie : 쿠키에 대한 정보
//req.headers : 요청의 헤더를 의미
//Set-Cookie : 브라우저한테 다음에 해당하는 쿠키를 저장을 의미
.listen(8083, () => {
    console.log('8083번 포트에서 서버가 대기 중입니다.');
});