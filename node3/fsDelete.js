const fs = require('fs').promises;

fs.readdir('./folder')
    .then((dir) => {
        console.log('폴더 내용 확인', dir);
        //folder 라는 폴더를 조회
        return fs.unlink('./folder/newfile.js');
        //실행이 되면 파일을 지움
    })
    .then(() => {
        console.log('파일 삭제 성공');
        //folder 파일이 조회가 성공하며 파일 삭제를 실행
        return fs.rmdir('./folder');
        //실행이 되면 folder 폴더 삭제
    })
    .then(() => {
        console.log('폴더 삭제 성공');
        //파일이 삭제가 성공하며 폴더를 삭제
    })
    .catch((err) => {
        console.error(err);
    });