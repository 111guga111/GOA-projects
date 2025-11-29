const fs = require('fs')

process.stdin.on('data', (userInput) =>{
    const data = userInput.toString();

    if(data.trim() === 'i am done entering text'){
        process.exit()
    }

    fs.appendFileSync('inputs.txt', data)
})