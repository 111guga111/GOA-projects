const fs = require('fs');

const writeStream = fs.createWriteStream('text.txt');


for (let i = 1; i <= 50; i++) {
    writeStream.write(i.toString() + '\n');
}
