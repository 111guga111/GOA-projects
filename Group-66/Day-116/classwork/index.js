
const events = require("events");

const emitter = new events.EventEmitter();


emitter.on("sum", (a, b) => {
  console.log("Sum:", a + b);
});


emitter.on("greet", (name) => {
  console.log("Hello,", name);
});


emitter.emit("sum", 5, 7);
emitter.emit("greet", "Guga");

let attempts = 0
process.stdin.on('data', (userInput)=>{
    const number = parseInt(userInput.toString());
    attempts++;

    if(number === 5){
        console.log('Well Done!')
        process.exit();
    }else{
        console.log('Try Again')
    }
})




/*  
    Imperative: You tell the computer how to do something step by step.     
    Declarative: You tell the computer what you want, not how to do it.

    Imperative = describe the process.
    Declarative = describe the result.

    Event-Driven Programming: A style where code runs when events happen
*/
