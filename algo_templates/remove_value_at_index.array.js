// // Remove At
// // Given an array and an index of an array, remove and return the array value at that index. Do this without using built-in array methods except pop(). Think of popFront(arr) as equivalent to removeAt(arr,0).

// // Strategy:
// // 1) Increase array by one at the end starting from index position
// // 3) Pop last value

function arr4(arr, index){
    if (index < 0){
        return "Index must be a positive number"
    }
    if (arr.length == 0){
        return "There is nothing to remove"
    }
    if (index >= arr.length){
        return "That index is larger than the array's length"
    }
    var temp = arr[index];
    for (var i = index; i < arr.length; i++){
        arr[i] = arr[i+1];
    }
        arr.pop();
    if (arr.length ==0){
        return "Removed value was " + temp + ", " + "Array is now empty";
    }
    return "Removed value was " + temp + ", " + "Array is now: " + arr;
}
console.log(arr4([1,2,3,4], 2))