// #1 - Return the given array, after setting any negative values to zero.  For example resetNegatives( [1,2,-1, -3]) should return [1,2,0,0].

// function arr1(x){
//     for (var i = 0; i < x.length; i++){
//         if(x[i] < 0){
//             x[i] = 0;
//         }
//     }
//     return x;
// }
// console.log(arr1([1,2,-1,-3]))

// #2 - Given an array, move all values forward by one index, dropping the first and leaving a ‘0’ value at the end.  For example moveForward( [1,2,3]) should return [2,3,0].

function arr2(arr){
    for (var i = 0; i > arr.length; i++){
        arr[i] = arr[i+1];    
    }
    return arr;
}
console.log(arr2([1,2,3]))

// #3 - Given an array, return an array with values in a reversed order.  For example, returnReversed([1,2,3]) should return [3,2,1].



// #4 - Create a function that changes a given array to list each original element twice, retaining original order.  Have the function return the new array.  For example repeatTwice( [4,”Ulysses”, 42, false] ) should return [4,4, “Ulysses”, “Ulysses”, 42, 42, false, false].