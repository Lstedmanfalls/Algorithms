// Given a sorted array of integers, find the first pair that sums to zero. Return an array with the first pair' values. Return undefined if no pair.

const sumZero = (arr) => {
    if (arr.length < 2){
        return "Array must contain at least two elements"
    }
    let idxStart = 0
    let idxEnd = arr.length-1
    while (idxStart < idxEnd) {
        let sum = arr[idxStart] + arr[idxEnd]
        if (sum === 0){
            return [arr[idxStart], arr[idxEnd]]
        }
        else if (sum > 0) {
            idxEnd --
        }
        else{
            idxStart ++
        }
    }
    return "No matches / undefined"
}

console.log(sumZero([-3,-2,-1,0,1,2,3]))
console.log(sumZero([-2,0,1,3]))
console.log(sumZero([1,2,3]))
console.log(sumZero([0]))