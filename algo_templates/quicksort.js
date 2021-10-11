// Given an unsorted array, sort it from least to greatest using quicksort recursively

const quickSort = (arr, i = 0, j = arr.length - 1) => { // start pointer i at start of arr, pointer j at end of arr
    if (arr.length > 1) { // if there is more than 1 item in the array (needs to be at least 2 to be sorted)
        const pivot2 = partition(arr, i, j) // we start out where the 2 sections (hi and low) are separated at the pivot
        if (i < pivot2 - 1) quickSort(arr, i, pivot2 - 1) // if the start pointer is less than the value right before the pivot, then start sorting there, this is the recursive part for the left side
        if (j > pivot2) quickSort(arr, pivot2, j) // if the end pointer is greater than the value of the pivot, then start sorting there, this is the recursive part for the right side
    }
    return arr
}

const partition = (arr, i, j) => {
    const pivot = arr[Math.floor(Math.random() * (j - i + 1) + i)] // Set the pivot (point of dividing high and low). It's most efficient to make the pivot idx be random
    while (i <= j) { // while i has not yet reached j
        while (arr[i] < pivot) { // while the value at the start pointer is less than the pivot value
            i++ // move onto the next index for i (is in correct order)
        }
        while (arr[j] > pivot) { // while the value at the end pointer is greater than the pivot value
            j-- // move onto the next index for j (is in correct order)
        }
        if (i <= j) { // if we get stuck (the low end pointer has reached j or j has exceeded i)
            swap(arr, i, j) // swap becuase that means the higher value is on the left and should be on the right
            i++ //move onto the next index for i
            j-- //move onto the next index for j
        }
    }
    return i //return i so you know where the last pivot was
}

const swap = (arr, i, j) => { //function swapping the value of index i and j to make the lower on the left and higher on the right
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

console.log(quickSort([6,2,5,7,3,8,4,1,0,9]))