import figlet from "figlet";

figlet("Hello World", (err, data)=>{
    if (err){
        console.log(err)
    }

    console.log(data)

})