function fibs(n){ //fibonacci solved with iteration
    let arr = [0,1]
    let index
    for( let i = 2; i<n; i++ ){
        index = arr[i-1]+arr[i-2]
        arr.push(index)
    }
    return arr
}
console.log(fibs(6))

function fibsRec(n, arr=[0,1]){
    if( n < 1 ){
        return arr;
    }
    arr.push(arr[arr.length-1]+arr[arr.length-2])
    fibsRec(n-1, arr)
    return arr
}

console.log(fibsRec(6))