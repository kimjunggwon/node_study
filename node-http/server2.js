const http = require('http');
const fs = require('fs').promises;

http.createServer(async (req, res) => {
    try{
        const data = await fs.readFile('./server2.html');
        //요청이 들어오면 fs 모듈을 통해 파일을 읽음
        res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
        res.end(data);
    }catch(err){
        console.error(err);
        res.writeHead(500, {'Content-Type':'text/plain; charset=utf-8'});
        res.end(err.message);
    }
})
.listen(8081, () => {
    console.log('8081번 포트에서 서버가 대기 중입니다.');
});