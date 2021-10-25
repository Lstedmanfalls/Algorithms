const areThereDuplicates = (...nums) => {
    const allNums = nums;
    const obj = {};
    if (allNums.length > 1){
        for (let val of allNums){
            obj[val] = ++obj[val] || 0;
            if (obj[val] >=1){
                return true;
            }
        }
    }
    return false;
}

console.log(areThereDuplicates(1,2,2,4)) //true
console.log(areThereDuplicates(0)) //false
console.log(areThereDuplicates(0,0)) //true
