const arr = [15,48,97,32,45,91,2,35,1,44,87,1,2,3]

function mergeSort(arr){
    if( arr.length<2 ){
        return arr
    }
    const half = Math.ceil(arr.length/2)
    const left = arr.slice(0,half)
    const rigth= arr.slice(half)

    const smallerLeft = mergeSort(left)
    const smallerRigth = mergeSort(rigth)

    return sort(smallerLeft, smallerRigth)
}

function sort(left, rigth){
    const arrJoint = []
    while( left.length>0 && rigth.length>0 ){
        if(left[0]<rigth[0]){
            arrJoint.push(left.shift())
        }else{
            arrJoint.push(rigth.shift())
        }
    }
    arrJoint.push(...left, ...rigth)
    return arrJoint
}

console.log(mergeSort(arr))