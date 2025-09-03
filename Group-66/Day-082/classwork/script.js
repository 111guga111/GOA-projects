let lst = [1, 2, 3, 4, 5]
let filtered = []

for( let i = 0; i < lst.length; i++){
    if (lst[i] % 2 == 0){
        filtered.push(lst[i])
    }
}

console.log(filtered)


/* 
    run space is where we run our code, for example node or some browser.
    REPL means read eval print loop, it helps us run our code
    
*/