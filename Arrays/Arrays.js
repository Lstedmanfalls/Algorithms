// #1 - Given an array and a value Y, count and print the number of array values greater than Y.

// function arr1(x){
//     var y = 1;
//     count = 0;
//     for (var i = 0; i < x.length; i++){
//         if (x[i] > y){
//             count++;
//         }
//     }
//     return count;
// }
// console.log(arr1([0,10,0,5]));



// #2 - Given an array, print the max, min and average values for that array.

// function arr2(x){
//     var sum = 0;
//     var max = x[0];
//     var min = x[0]; 
//     for (var i = 0; i < x.length; i++){
//         if (x[i] > max){
//             max = x[i];
//             }
//         else if (x[i] < min){
//             min = x[i]
//             }
//         sum += x[i];
//         }
//     var avg = sum/x.length;
//     console.log(("the max is: " + max) + ", " + ("the min is: " + min) + ", " + ("the average is: " + avg));
// }
// arr2([0,-20,100,-6]);




// #3 - Given an array of numbers, create a function that returns a new array where negative values were replaced with the string ‘Dojo’. 
// For example, replaceNegatives( [1,2,-3,-5,5]) should return [1,2, "Dojo", "Dojo", 5].

// function arr3(x){
//     newarr = [];
//     for (i = 0; i < x.length; i++){
//         if (x[i] < 0){
//             newarr.push("Dojo");
//         }
//         else {
//             newarr.push(x[i]);
//         }
//     }
//     return newarr;
// }
// console.log(arr3([1,2,-3,-5,5]));



// #4 - Given array, and indices start and end, remove vals in that index range, working in-place (hence shortening the array).
// For example, removeVals([20,30,40,50,60,70],2,4) should return [20,30,70]

// function removeVals(x,y,z){
//     x.splice(y, ((z-y))+1);
//     return x;
// }
// console.log(removeVals([20,30,40,50,60,70],1,3));

//Alternative, without splice method:

// function removeVals(x,y,z){
//     x[y] = x[z+1];
//     x.length = y+1;
//     return x;
// }
// console.log(removeVals([20,30,40,50,60,70],2,4));
