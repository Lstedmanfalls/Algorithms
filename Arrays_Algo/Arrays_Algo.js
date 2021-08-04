//Print each array value and the sum so far. Expected Outcome:
/* Output will be:
    Num 6, Sum 6
    Num 3, Sum 9
    Num 5, Sum 14
    Num 1, Sum 15
    Num 2, Sum 17
    Num 4, Sum 21
*/

let testArr = [6,3,5,1,2,4];
let sum = 0;
{for (let num = 0; num < testArr.length; num++){  
    sum = (testArr[num] + sum);
    console.log("Num:" + "" + testArr[num]);
    console.log ("Sum:" + "" + sum);
}
}

//Multiply each value in the array by its array position
//Output will be: [0,3,10,3,8,20]

let testArr = [6,3,5,1,2,4];
for (let i = 0; i < testArr.length; i++){
    testArr[i] = i * testArr[i];        
}

console.log(testArr);