const fs = require('fs');

const fileName = 'text1.txt';

if (fs.existsSync(fileName)) {
    console.log('File found');
} else {
    console.log('File missing');
}
