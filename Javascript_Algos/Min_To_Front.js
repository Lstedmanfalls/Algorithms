// Given an array of comparable values, move the lowest element to array’s front, shifting backward any elements previously ahead of it. Do not otherwise change the array’s order. Given [4,2,1,3,5], change it to [1,4,2,3,5] and return it. As always, do this without using built-in functions.

// Strategy:
// 1) Find the min value
// 2) If the min value, swap it with -1

function minToFront(arr){
    var min = arr[0]
    for (var i = 0; i <= arr.length-1; i++){
        if (arr[i] < min) {
            min = arr[i];
            var index = i;
        }
    }
    for(var j = index; j > 0; j--){
        temp = arr[j];
        arr[j] = arr[j-1];
        arr[j-1] = temp; 
        }
    return arr
}
console.log(minToFront([4,2,1,3,5]))