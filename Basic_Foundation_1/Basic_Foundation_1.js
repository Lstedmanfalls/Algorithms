// 1) Get 1 to 255 - Write a function that returns an array with all the numbers from 1 to 255.

function arrFunc()
    {let arr = [];
        for (let i = 1; i <= 255; i++)
            {arr.push(i);
            }
        return arr;
    }
console.log(arrFunc());

// 2) Get even 1000 - Write a function that would get the sum of all the even numbers from 1 to 1000.  You may use a modulus operator for this exercise.

function evenNums()
    {let sum = 0;
        for (let i = 1; i <= 1000; i++)
            {if (i %2 == 0)
                {sum += i;
                }
            }
        return sum;
    }
console.log(evenNums());

// 3) Sum odd 5000 - Write a function that returns the sum of all the odd numbers from 1 to 5000. (e.g. 1+3+5+...+4997+4999).
function oddNums()
    {let sum = 0;
        for (let i = 1; i <= 5000; i++)
            {if (i %2 == 1)
                {sum += i;
                }
            }
        return sum;
    }
console.log(oddNums());

// 4) Iterate an array - Write a function that returns the sum of all the values within an array. (e.g. [1,2,5] returns 8. [-5,2,5,12] returns 14).

function arrSum()
    {let sum = 0;
    let thisArr = [-5,2,5,12];
        for (let i = 0; i < thisArr.length; i++)
            {sum += thisArr[i];
            }
        return sum;
    }
console.log(arrSum());

// 5) Find max - Given an array with multiple values, write a function that returns the maximum number in the array. (e.g. for [-3,3,5,7] max is 7)
function maxarr(newArr)
    {let max = newArr[0]
        for (let i = 0; i < newArr.length; i++)
            {if (newArr[i] > max)
                {max = newArr[i];
                }
            }
        return max;
    }
console.log(maxarr([-3,3,5,7]));

// 6) Find average - Given an array with multiple values, write a function that returns the average of the values in the array. (e.g. for [1,3,5,7,20] average is 7.2)

function avgArr(anotherArr)
    {let total = 0;
        for (let i = 0; i < anotherArr.length; i++) 
            {total += anotherArr[i];
            }
        return total / anotherArr.length;
    }
console.log(avgArr([1,3,5,7,20]));

// 7) Array odd - Write a function that would return an array of all the odd numbers between 1 to 50. (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.

function oddArr()
    {let arrAgain = [];
        for (let i = 0; i <= 50; i++)
            {if (i %2 == 1)
                arrAgain.push(i);
            }
        return arrAgain;
    }
console.log(oddArr());


// 8) Greater than Y - Given value of Y, write a function that takes an array and returns the number of values that are greater than Y. For example if arr = [1, 3, 5, 7] and Y = 3, your function will return 2. (There are two values in the array greater than 3, which are 5, 7).

function greater(y, moreArr)
    {let more = 0;
        for (let i = 0; i < moreArr.length; i++)
            {if (moreArr[i] > y )
                more += 1;
            }
        return more;
    }
console.log(greater(3, [1,3,5,7]));

// 9) Squares - Given an array with multiple values, write a function that replaces each value in the array with the value squared by itself. (e.g. [1,5,10,-2] will become [1,25,100,4])

function square(thatArr)
    {for (let i = 0; i < thatArr.length; i++)
        {thatArr[i] *= thatArr[i]
        }
        return thatArr;
    }
    console.log(square([1,5,10,-2]));

// 10) Negatives - Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0. When the program is done the array should contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0])

function replace(negArr)
    {for (let i = 0; i < negArr.length; i++)
        {if (negArr[i] < 1)
            negArr[i] = 0;
        }
        return negArr;
    }

console.log(replace([1,5,10,-2]));

// 11) Max/Min/Avg - Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array. (e.g. [1,5,10,-2] will return [10,-2,3.5])

function minMaxAvg(origArr)
    {let minimum = origArr[0];
    let maximum = origArr[0];
    let all = 0;
        for (let i = 0; i < origArr.length; i++)
            {if (origArr[i] < minimum)
                {minimum = origArr[i];
                }
            if (origArr[i] > maximum)
                {maximum = origArr[i];
                }
            all += origArr[i];
            }
        let y = all / origArr.length;
        return [maximum, minimum, y];
    }
console.log(minMaxAvg([1,5,10,-2]));

// 12) Swap Values - Write a function that will swap the first and last values of any given array. The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).

function firstLast(newestArr)
    {let start = newestArr[0];
    let end = newestArr[newestArr.length-1];
    newestArr[0] = end;
    newestArr[newestArr.length-1] = start;
    return newestArr;
    }
console.log(firstLast([1,5,10,-2]));

// 13) Number to String - Write a function that takes an array of numbers and replaces any negative values within the array with the string 'Dojo'. For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].

function numberString(lastArr)
    {for (let i = 0; i < lastArr.length; i++)
            {if (lastArr[i] < 0)
                lastArr[i] = "Dojo";
            }
    return lastArr;
    }
console.log(numberString([-1,-3,2]));