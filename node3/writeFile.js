const fs = require('fs').promises;

fs.writeFile('./writeme.rtf', '글이 입력됩니다!')
    .then(() => {
        return fs.readFile('./writeme.rtf');
    })
    .then((data) => {
        console.log(data.toString());
    })
    .catch((err) => {
        console.log(err);
    });