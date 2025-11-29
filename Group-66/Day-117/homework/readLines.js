const fs = require('fs')
const readline = require('readline')

const stream = fs.createReadStream('text.txt')

const readLine = readline.createInterface({
    input: stream
})

let lineCount = 0

readLine.on('line', (line) =>{
    lineCount++

    if (line === 'guga'){
        console.log(`your name was on ${lineCount} line`)
    }

    if(lineCount === 10){
        console.log('reached line limit of 10')
        process.exit();
    }

})

readLine.on('close', ()=> {
    console.log(`page has ${lineCount} lines`)
})