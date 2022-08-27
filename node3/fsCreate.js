const fs = require('fs').promises;
const constants = require('fs').constants;

fs.access('./folder', constants.F_OK | constants.W_OK | constants.R_OK)
    .then(() => {
        return Promise.reject('이미 폴더 있음');
    })
    .catch((err) => {
        if(err.code === 'ENOENT'){
            console.log('폴더 없음');
            return fs.mkdir('./folder');
            //실행이 되면 폴더 생성
        }
        //folder 라는 폴더가 없어서 첫 번째로 실행
        return Promise.reject(err);
    })
    .then(() => {
        console.log('폴더 만들기 성공');
        //folder 라는 폴더가 없음을 감지하여 폴더를 생성
        return fs.open('./folder/file.js', 'w');
        //실행이 되면 file.js 파일 생성
    })
    .then((fd) => {
        console.log('빈 파일 만들기 성공', fd);
        //folder가 생성이 되어 file.js 파일 생성
        return fs.rename('./folder/file.js', './folder/newfile.js');
        //실행이 되면 file.js를 newfile.js 로 파일명 변경
    })
    .then(() => {
        console.log('이름 바꾸기 성공');
        //file.js가 newfile.js로 이름여 빈경이 되어 실행
    })
    .catch((err) => {
        console.error(err);
    })