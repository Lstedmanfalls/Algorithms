const countUniqueValues = (arr) => {
    if (arr.length > 0){
        let i = 0;
        let j = 1;
        while (j < arr.length){
            if (arr[i] === arr[j]){
                j++
            }
            else{
                i++;
                arr[i] = arr[j];
                j++
            }
        }
        const count = i+1
        return count
    }
    else {
        return "There are no numbers"
    }
}



console.log(countUniqueValues([1,1,1,1,1,2])) //should return 2
console.log(countUniqueValues([1,2,3,4,5,6,7])) //should return 7
console.log(countUniqueValues([])) //should return 0
console.log(countUniqueValues([-2,-1,-1,0,1])) //should return 4
console.log(countUniqueValues([1,3,5,5,6,7]))// should return 5