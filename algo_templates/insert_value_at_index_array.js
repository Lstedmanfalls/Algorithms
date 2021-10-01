// // Insert At
// // Given an array, index, and additional value, insert the value into array at given index. Do this without using built-in array methods. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val).

// // Strategy:
// // 1) Increase array by one at the index position and forward
// // 2) Insert new value into given index position

function arr3(arr, index, value){
    if (index > arr.length){
        return "That index is larger than the array's length"
    }
    if (index < 0){
        return "Index must be a positive number"
    }
    for (var i = arr.length; i >= index; i--){
        arr[i] = arr[i-1];
    }
    arr[index] = value;
    return arr;
}
console.log(arr3([1,2,3,4], 3, 10))