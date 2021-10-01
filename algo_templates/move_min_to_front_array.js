// Given an array, move the lowest element to array’s front, shifting backward any elements previously ahead of it. Do not otherwise change the array’s order. Given [4,2,1,3,5], change it to [1,4,2,3,5] and return it. 

function mintoFront1(arr){
    var min = Math.min(...arr); // When doing Math.min on an array, put ... before the array name, otherwise it returns NaN
    arr.unshift(min);
    return arr
}
console.log(mintoFront1([10,9,8,7,6]))

// // Without any built-in function.
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