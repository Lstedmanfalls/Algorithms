// // Pop Front
// // Given an array, remove and return the value at the beginning of the array. Do this without using any built-in array methods except pop().

// //Strategy:
// // 1) Increase array by one at the end
// // 2) Move first value to the end
// // 3) Pop last value

function arr2(arr){
    for (var i = 0; i < arr.length; i++){
        arr[i] = arr[i+1];
    }
    arr.pop();
    return arr;
}
console.log(arr2([0,1,2,3,4,5,6]))