const fs = require('fs');

fs.watch('./target.rtf', (eventType, filename) => {
    console.log(eventType, filename);
});

//watch(변경을 감지할 파일, 파일 이벤트 감지)