const fs = require('fs');
const file = fs.createWriteStream('./big.rtf');

for(let i = 0; i <= 100; i++){
    file.write('파일 내용'+i+'\n');
}

file.end();