const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.write('<h1>Hello World!</h1>');
    res.end('<p>Hello Server!</p>');
})
/*
res.writeHead() : 응답에 대한 정보를 기록하는 메서드
 - 첫 번째 인수 : 성공적인 요청임을 의미하는 200
 - 두 번째 인수 : 응답에 대한 정보를 보내는 콘텐츠의 형식이 HTML임을 알림
res.write() : 클라이언트로 보낼 데이터 메서드
res.end() : 응답을 종료하는 메서드
*/
.listen(8080, () => {
    console.log('8080번 포트에서 서버가 대기 중입니다.');
});
//listen 메서드 : 클라이언트에 공개할 포트 연결 후 실행될 콜백 함수를 입력