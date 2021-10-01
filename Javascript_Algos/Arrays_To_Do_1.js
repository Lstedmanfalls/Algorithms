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


// // Swap Pairs
// // Swap positions of successive pairs of values of given array. If length is odd, do not change the final element. For [1,2,3,4], return [2,1,4,3]. For example, change input ["Brendan",true,42] to [true,"Brendan",42]. As with all array challenges, do this without using any built-in array methods.

// // Strategy:
// // 1) Swap each index value with the one after it
// // 2) Start at the index that is +2 of i on the next iteration
// // 3) For odds, don't count the last index 

function arr5(arr){  
    if (arr.length %2 == 0){
        for (var i = 0; i < arr.length-1; i+=2){
            temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp;
        }
    }
    else{
        for (var i = 0; i < arr.length-2; i +=2){
            temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp;
        }
    }
    return arr
}
console.log(arr5(["Brendan",true,42]))
// //Should print [true, "Brendan", 42]
console.log(arr5([1,2,3,4,5,6,7]))
// //Should print [2,1,4,3,6,5,7]
console.log(arr5([1,2,3,4,5,6]))
// //Should print [2,1,4,3,6,5]


// Remove Duplicates
// Sara is looking to hire an awesome web developer and has received applications from various sources. Her assistant alphabetized them but noticed some duplicates. Given a sorted array, remove duplicate values. Because array elements are already in order, all duplicate values will be grouped together. As with all these array challenges, do this without using any built-in array methods.Solve this without using any nested loops.

//Strategy:
// 1) Find the index where the first duplicate occurs
// 2) Remove at that index

function arr6(arr){
    for (var i = 0; i < arr.length; i++){
        if (arr[i] == arr[i+1]){
            index = i;
            console.log(index);
        }
    }
    return arr
}
console.log(arr6(["Alex", "Alex", "Bart", "Champ","Champ", "Duke"]))
// Can't figure out how to do this one