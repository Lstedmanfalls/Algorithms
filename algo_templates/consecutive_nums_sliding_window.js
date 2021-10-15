// Given an array and a num range of consecutive values, return the largest sum of that number of consecutive values in the array

const slidingWindow = (arr, n) => {
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < n) return null;
    for (let i = 0; i < n; i++) {
        maxSum += arr[i]; 
    }
    tempSum = maxSum;
    for (let i = n; i < arr.length; i++){
        tempSum = tempSum - arr[i - n] + arr[i];
        maxSum = Math.max(maxSum, tempSum) //maxSum will equal the greater of either maxSum or tempSum
    }
    return maxSum
}

console.log(slidingWindow([0,1,2,3,4,5,6,7,8],3)) // should be 21 (sum from 6,7,8)
console.log(slidingWindow([1,2,3], 3)) //should be 6
console.log(slidingWindow([1,2,5,2,8,1,5],2)) // should be 10
console.log(slidingWindow([1,2,5,2,8,1,5],4)) // should be 17
console.log(slidingWindow([4,2,1,6,1],1)) // should be 6
console.log(slidingWindow([4,2,1,6,2],4)) // should be 13
console.log(slidingWindow([],1)) // should be null