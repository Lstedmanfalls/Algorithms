// Given a numerical array, reverse the order of values, in-place. The reversed array should have the same length, with existing elements moved to other indices so that order of elements is reversed. Working 'in-place' means that you cannot use a second array – move values within the array that you are given. As always, do not use built-in array functions such as splice().

// Strategy:
// 1) Swap the first and last values on first loop
// 2) Move the last value -1 for each loop

function arr1(arr){
    var x = (arr.length -1)
    for (var i = 0; i <= x; i++){
        temp = arr[i];
        arr[i] = arr[x]
        arr[x] = temp;
        x--
    }
    return arr;
}
console.log(arr1([5,4,3,2,1,0]))