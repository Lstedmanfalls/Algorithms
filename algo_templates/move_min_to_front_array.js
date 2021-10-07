// Given an array, move the lowest element to array’s front, shifting backward any elements previously ahead of it. Do not otherwise change the array’s order. Given [4,2,1,3,5], change it to [1,4,2,3,5] and return it. 

function minToFront(arr){
    let min = arr[0];
    let idx = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] < min){
            min = arr[i];
            idx = i
        }
    }
    arr.unshift(min);
    arr.splice(idx+1, 1);
    return arr
}
console.log(minToFront([4,2,1,3,5]))