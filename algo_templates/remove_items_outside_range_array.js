// Given arr and values min and max, retain only the array values between min and max. Work in-place.

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