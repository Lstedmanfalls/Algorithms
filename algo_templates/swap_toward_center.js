// Swap Toward the Center - Given an array, swap the first and last values, third and third-to-last values, etc.  Example: swapTowardCenter([true,42,"Ada",2,"pizza"]) turns the array into ["pizza", 42, "Ada", 2, true].  swapTowardCenter([1,2,3,4,5,6]) turns the array into [6,2,4,3,5,1].
function swap(arr12){
    let index = 0;
    for (let i = 0; i < arr12.length/2; i++){
        index = arr12[i];
        if (i % 2 == 0){
            arr12[i] = arr12[arr12.length - (1+i)];
            arr12[arr12.length - (1+i)] = index;
            }
        }
    return arr12s
}
console.log(swap([8,2,3,4,5,7]))