

export function greet(name){
    return `Hello ${name}!`
}



export function weather(hour){
    if( hour >= 6 && hour < 12 ){
        return "sunny"
    }else if ( hour >= 12 &&  hour < 18 ){
        return "rainy"
    }else{
        return "clear"
    }
}