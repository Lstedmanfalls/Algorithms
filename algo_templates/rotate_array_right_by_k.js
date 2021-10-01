// Implement rotateArr(nums, k) that accepts array and offset. Shift arr's values to the right by that amount. 'Wrap-around' any values that shift off array's end to the other side, so that no data is lost. Operate in-place: given ([1,2,3],1), change the array to [3,1,2].

function rotateRight(nums, k) { // nums is the array, k is the amount it is shifted by
    if (k > 0){
        var k = k % nums.length;
        reverse(nums, 0, nums.length - 1); // reverse function below
        // First reverse the entire array (nums[0] is the start, nums.length-1 is the end )
        reverse(nums, 0, k - 1);
        // Second, reverse from the number of k elements of the array (e.g., if k = 2, we're reversing index 0 and 1)
        reverse(nums, k, nums.length - 1);
        // Third, reverse the second part of the array from k to the end (e.g., if k = 2, from index 3 to the end)
        return nums;
        
        function reverse(nums, start, end) { // While loop that reverses the order of array elements from from to start
            while (start < end) {
                let temp = nums[start];
                nums[start] = nums[end];
                nums[end] = temp;
                start++;
                end--;
            }
            return nums; // Returns the reversed part of whatever section we're doing
        }
    }
}
console.log(rotateRight([1,2,3,4,5,6], 2))
// should be [5,6,1,2,3,4]