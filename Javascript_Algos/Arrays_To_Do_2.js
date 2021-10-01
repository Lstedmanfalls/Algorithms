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

// Implement rotateArr(arr, shiftBy) that accepts array and offset. Shift arr's values to the right by that amount. 'Wrap-around' any values that shift off array's end to the other side, so that no data is lost. Operate in-place: given ([1,2,3],1), change the array to [3,1,2]. Don't use built-in functions. Second: allow negative shiftBy (shift L, not R). Third: minimize memory usage. With no new array, handle arrays/shiftBys in the millions. Fourth: minimize the touches of each element.

function arr2(arr, offset){
    for (var i = arr.length-1; i > 0; i--){
        temp = arr[i];
        arr[i] = arr[i-(offset)];
        arr[i-(offset)] = temp;
    }
    // else{
    //     continue
    // }
    return arr
}
console.log(arr2([1,2,3,4],1))
// Can only get it to work when it's rotated by 1, can't figure out how to rotate it by more than 1

// Alan is good at breaking secret codes. One method is to eliminate values that lie outside of a specific known range. Given arr and values min and max, retain only the array values between min and max. Work in-place: return the array you are given, with values in original order. No built-in array functions.

function arr3(arr, min, max){
    //     Loop through the array
    for (var i = 0; i < arr.length; i++){
    //     If the value is NOT between min and max:
        if (arr[i] <= min || arr[i] >= max){
            // move all values after current index to the left (-1) by looping  
            // To move each value that is out of range to the end to be chopped off
            for (j = i+1; j < arr.length; j++){
                arr[j-1] = arr[j];
            }
            // Chop off the bad values
            arr.pop()
            i--
        } 
        // If it is within the range, move onto the next index
    }
    return arr
}
console.log(arr3([4,5,0,1,2,3,6,7],2,5))


// Replicate JavaScript's concat(). Create a standalone function that accepts two arrays. Return a new array containing the first array's elements, followed by the second array's elements. Do not alter the original arrays. Ex.: arrConcat( ['a','b'], [1,2] ) should return new array ['a','b',1,2].

function arr4(arr1, arr2){
    newarr = []
    for (i = 0; i < arr1.length; i++){
        newarr.push(arr1[i]);
    }
    for (j = 0; j < arr2.length; j++){
        newarr.push(arr2[j])
    }
    return newarr
}
console.log(arr4(["a", "b","c"], [1,2,3,4]))