const fs = require('fs').promises;

fs.copyFile('readme4.rtf', 'writeme4.rtf')
    .then(() => {
        console.log('복사 완료');
    })
    .catch((error) => {
        console.error(error);
    });
    //copyFile(복사할 파일, 복사될 경로, 복사 후 콜백 함수)