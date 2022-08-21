const express = require('express');
const path = require('path');

const app = express();
//express 모듈 할당

app.set('port', process.env.PORT || 3000);
//서버가 실행될 포트를 설정

app.get('/', (req, res) => {
    //res.send('Hello, Express');
    res.sendFile(path.join(__dirname, '/index.html'));
    //path 모듈을 이용하여 sendFile메서드에서 파일을 불러옴
});
//GET 요청이 올 때 동작

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기 중');
});
//웹 서버와 동일하여 서버를 실행