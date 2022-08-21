const fs = require('fs');

setInterval(() => {
    fs.unlink('./test.js', (err) => {
    //실제 존재하지 않는 파일 삭제
        if(err){
            console.error(err);
        }
    });
}, 1000);