const http = require('http');
const fs = require('fs').promises;
const url = require('url');
const qs = require('querystring');

const parseCookies = (cookie = '') => 
    cookie
        .split(';')
        .map(v => v.split('='))
        .reduce((acc, [k,v]) => {
            acc[k.trim()] = decodeURIComponent(v);
            return acc;
        }, {});
//해당 함수는 문자열을 객체로 변환

http.createServer(async (req, res) => {
    const cookies = parseCookies(req.headers.cookie);

    if(req.url.startsWith('/login')){
        const { query } = url.parse(req.url);
        const { name } = qs.parse(query);
        const expires = new Date();

        expires.setMinutes(expires.getMinutes() + 5);
        res.writeHead(302, {
            Location: '/',
            'Set-Cookie' : `name=${encodeURIComponent(name)}; Expires=${expires.toGMTString()}; HttpOnly; Path=/`,
        });
        //쿠키값이 생성이 되면 302 상태 반환
        //쿠키의 값은 이름과 유효 시간 설정
        res.end();
    }else if(cookies.name){
        res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
        res.end(`${cookies.name}님 안녕하세요`);
        //쿠키 값이 있으면 쿠키 값을 헤더의 저장하고 쿠키 값을 클라이언트 페이지에 출력
    }else{
        try{
            const data = await fs.readFile('./cookie2.html');
            res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
            res.end(data);
        }catch(err){
            res.writeHead(500, {'Content-Type':'text/plain; charset=utf-8'});
            res.end(err.message);
        }
    }
})
.listen(8084, () => {
    console.log('8084번 포트에서 서버가 대기 중입니다.');
});