const manualIndex = (arr, cb) => {
    for (let i=0 ;i<arr.length; i++){
        if (cb(arr[i])){
            return i 
        }
    }
    return -1
}
console.log(manualIndex(lst, a => a%2==0))

const manualFilter = (array,cb)=>{
    let nums = []
    for(let i=0; i<array.length; i++){
        if(cb(array[i])){
            nums.push(array[i])
        }
    }
    return nums
}
console.log(manualFilter(lst,a=> a%2===0))

const manualMap = (arr,cb)=>{
    let nums = []
    for(let i=0;i<arr.length;i++){
        nums.push(cb(arr[i]))
    }
    return nums
}
console.log(manualMap(lst,a => a*2))

const manualReduce = (arr,cb,def) => {
    start=def
    for(let i = 0; i<arr.length;i++){
        start = cb(start,arr[i])
    }
    return start
}
console.log(manualReduce(lst,(a,b) => a+b,0))