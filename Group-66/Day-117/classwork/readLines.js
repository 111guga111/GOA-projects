const fs = require('fs');
const readline = require('readline');

const fileStream = fs.createReadStream('result.txt');

const rl = readline.createInterface({
  input: fileStream,
});

rl.on('line', (line) => {
  console.log(line);
});



/* 
    stream is an object that helps us handle file line by line rather all at once
    its faster because computer is working with smaller pieces and not all at once
*/