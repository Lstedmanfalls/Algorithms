// 1. Biggie Size - Given an array, write a function that changes all positive numbers in the array to the string "big".  Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1, "big", "big", -5].

function biggieSize(arr1)
    {for (let i = 0; i < arr1.length; i++)
        {if (arr1[i] > 0)
            arr1[i] = "big";

        }
        return arr1;
    }
console.log(biggieSize([-1,3,5,-5]));

// 2. Print Low, Return High - Create a function that takes in an array of numbers.  The function should print the lowest value in the array, and return the highest value in the array.

function lowHigh(arr2)
    {let high = arr2[0]
    let low = arr2[0]
    for (let i = 0; i < arr2.length; i++)
        {if (arr2[i] > high)
            {high = arr2[i];
            }
        if (arr2[i] < low)
            {low = arr2[i]
            }
        }
    console.log("low is: " + low)
    return "high is: " + high
    }
console.log(lowHigh([10,3,-20,-5]))

// 3. Print One, Return Another - Build a function that takes in an array of numbers.  The function should print the second-to-last value in the array, and return the first odd value in the array.

function printReturn(arr3)
    {let secLast = arr3[arr3.length-2]
        console.log(secLast);
    for (i = 0; i < arr3.length; i++)
        {if (arr3[i] %2 == 1)
            {return arr3[i];
            }
        }
    }
console.log(printReturn([10,2,28,40,10,3,8,70,4]))

// 4. Double Vision - Given an array (similar to saying 'takes in an array'), create a function that returns a new array where each value in the original array has been doubled.  Calling double([1,2,3]) should return [2,4,6] without changing the original array.

function doubleVision(arr4)
    {let newArr = []
    for (let i = 0; i < arr4.length; i++)
        {newArr.push(arr4[i]*2)
        }
    return newArr;
    }
console.log(doubleVision([10,4,1]));

// 5. Count Positives - Given an array of numbers, create a function to replace the last value with the number of positive values found in the array.  Example, countPositives([-1,1,1,1]) changes the original array to [-1,1,1,3] and returns it.

function countPositives(arr5)
    {let count = 0;
        for (let i = 0; i < arr5.length; i++)
            {if (arr5[i] > 0) 
                {count++;
                arr5[arr5.length-1] = count;
                }
            }
    return arr5;
    }
console.log(countPositives([-4,6,2,-9,10]));

// 6. Evens and Odds - Create a function that accepts an array.  Every time that array has three odd values in a row, print "That's odd!".  Every time the array has three evens in a row, print "Even more so!".

function evensOdds(arr6)
    {let evenCount = 0;
    let oddCount = 0;
        for (let i = 0; i < arr6.length; i++)
        {if (arr6[i]%2 == 1)
            {oddCount++;
                if (oddCount == 3)
                {console.log("That's odd!")
                }
            evenCount = 0;
            }
        else
            {evenCount++;
                if (evenCount == 3)
                {console.log("Even more so!")
                }
            oddCount = 0;
            }
        }
    }
evensOdds([-1,6,2,8,-9,10,11,13,17,2,4,6]);

// 7. Increment the Seconds - Given an array of numbers arr, add 1 to every other element, specifically those whose index is odd (arr[1], arr[3], arr[5], etc).  Afterward, console.log each array value and return arr.

function increment (arr7)
    {for (let i = 0; i < arr7.length; i++)
        {if (i%2 == 1)
            {arr7[i]++
            }
            console.log(arr7[i])
        }
    return arr7
    }
console.log(increment([-2,2,4,7,4,0,1,23,15]));

// 8. Previous Lengths - You are passed an array (similar to saying 'takes in an array' or 'given an array') containing strings.  Working within that same array, replace each string with a number - the length of the string at the previous array index - and return the array.  For example, previousLengths(["hello", "dojo", "awesome"]) should return ["hello", 5, 4]. Hint: Can for loops only go forward?

function previousLengths (arr8)
    {for (let i = arr8.length-1; i > 0; i--)
        {arr8[i] = arr8[i-1].length
        }
    return arr8
    }
console.log(previousLengths(["hello","dojo","awesome"]));

// 9. Add Seven - Build a function that accepts an array. Return a new array with all the values of the original, but add 7 to each. Do not alter the original array.  Example, addSeven([1,2,3]) should return [8,9,10] in a new array.

function addSeven(arr9)
    {let newArr=[]
        for (let i = 0; i < arr9.length; i++)
        {newArr.push(i+7)
        }
    return newArr
    }
console.log(addSeven([1,2,3]));

// 10. Reverse Array - Given an array, write a function that reverses its values, in-place.  Example: reverse([3,1,6,4,2]) returns the same array, but now contains values reversed like so... [2,4,6,1,3].  Do this without creating an empty temporary array.  (Hint: you'll need to swap values).

function revArray(arr10)
    {for (let i = 0; i < arr10.length; i++)
        {return arr10.reverse()
        }
    }
console.log(revArray([3,1,6,4,2]))

// 11. Outlook: Negative - Given an array, create and return a new one containing all the values of the original array, but make them all negative (not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5].

function outlook(arr10)
    {let newArr = [];
        for (let i = 0; i < arr10.length; i++)
        {if (arr10[i] > 0) 
            {arr10[i] *= -1
            }
        newArr.push(arr10[i])
        }
    return newArr;
    }
console.log(outlook([1,-3,5,10,-20]))

// 12. Always Hungry - Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food".  If no array values are "food", then print "I'm hungry" once.

function alwaysHungry(arr11)
    {var food = 0;   
        {for (let i = 0; i < arr11.length; i++)
            {if (arr11[i] === "food")
                {console.log("yummy")
                food++
                }            
            }
        }
        {if (food === 0)
            {console.log("I'm hungry")
            }
        }
    }
alwaysHungry(["food",3,"ok","yes"])

// 13. Swap Toward the Center - Given an array, swap the first and last values, third and third-to-last values, etc.  Example: swapTowardCenter([true,42,"Ada",2,"pizza"]) turns the array into ["pizza", 42, "Ada", 2, true].  swapTowardCenter([1,2,3,4,5,6]) turns the array into [6,2,4,3,5,1].  No need to return the array this time.

function swap(arr12){
    let index = 0;
    for (let i = 0; i < arr12.length/2; i++){
        index = arr12[i];
        if (i % 2 == 0){
            arr12[i] = arr12[arr12.length - (1+i)];
            arr12[arr12.length - (1+i)] = index;
            }
        }
    console.log(arr12)
}
swap([8,2,3,4,5,7])

// 14. Scale the Array - Given an array arr and a number num, multiply all values in the array arr by the number num, and return the changed array arr.  For example, scaleArray([1,2,3], 3) should return [3,6,9].

function scale(arr13,num)
    {let newArr = [];
        for (i = 0; i < arr13.length; i++)
        {newArr.push(arr13[i] * num)
        }

    return newArr
    }
console.log(scale([4,2,3],3))