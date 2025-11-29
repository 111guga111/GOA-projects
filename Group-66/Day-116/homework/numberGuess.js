

process.stdin.on('data',(userInput)=>{
    const data = parseInt(userInput.toString());

    if( data === 5 ){
        console.log('Correct!');
        process.exit();

    }else if( data > 5 ){
        console.log('Too High!')

    }else{
        console.log('Too Low!')
    }

})

