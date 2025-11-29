const { add } = require('./utils/math');
const proccess = require('process');

console.log(add(5, 3));






const list = proccess.argv.slice(2);
const sum = list.reduce((acc, curr) => acc + parseInt(curr), 0);


console.log(proccess.argv);

console.log(sum);


/*

    proccess is a global object in Node.js that provides information about the current Node.js process. 

    One of its properties is argv, which is an array containing the command-line arguments passed when the Node.js process was launched.

*/