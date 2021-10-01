// Implement rotateArr(arr, shiftBy) that accepts array and offset. Shift arr's values to the left by that amount. 'Wrap-around' any values that shift off array's end to the other side, so that no data is lost. Operate in-place: given ([1,2,3],1), change the array to [3,1,2].

// Proabably not the fastest solution, but can't figure out how to do the reverse one for left rotation
    function rotateLeft(nums, k) {
        k = k % nums.length;
        while (k) {
            nums.push(nums.shift());
            k--;
        }
    return nums;
    }
console.log(rotateLeft([1,2,3,4,5,6], 2))
// Should be [3,4,5,6,1,2]