// // Push Front
// // Given an array and an additional value, insert this value at the beginning of the array. Do this without using any built-in array methods.

// // Strategy:
// // 1) Increase array by one at the beginning
// // 2) Put the given value into the array at the beginning

function arr1(arr, value){
    for (var i = arr.length; i >= 0; i--){
        arr[i] = arr[i-1];
    }
    arr[0] = value;
    return arr;
}
console.log(arr1([1,2,3,4,5,6], 0))