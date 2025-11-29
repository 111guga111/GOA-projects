
process.stdin.on('data',(userInput)=>{
    const data = userInput.toString();

    console.log(data.trim().split('').reduce((acc,cur) => cur + acc, '' ) )

})