const fs = require('fs');


process.stdin.on('data', (userInput)=>{
    const data = userInput.toString();
    const numbers = ['0','1','2','3','4','5','6','7','8','9'];

    const number = data.split('').some(letter => numbers.includes(letter))

    if (number){
        throw new Error('do not enter number')
    }

    fs.appendFileSync('result.txt', data);
    
})