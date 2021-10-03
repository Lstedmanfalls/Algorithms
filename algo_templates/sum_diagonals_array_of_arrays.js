/* Given a square matrix (array of arrays), calculate the absolute difference between the sums of its diagonals.
For example: 
[
    [1,2,3], 
    [4,5,-6], 
    [-7,8,9]
} 
*/ 

function diagonalDifference(arr) {
    let sum1 = 0;
    let sum2 = 0;
    let end = arr.length
    for (let i = 0; i < arr.length; i++){
        sum1 += arr[i][i];
        sum2 += arr[i][(end - 1) - i]
    }
    return Math.abs(sum1 - sum2)
}