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