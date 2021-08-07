//#1

// function multiply(x,y){
//     console.log(x);
//     console.log(y);
// }
// var b = multiply(2,3);
// console.log(b);

//My prediction = 2,3, undefined (nothing returned to be passed into b value, only console logs run)


//#2

// function multiply(x,y){
//     return x*y;
// }
// var b = multiply(2,3);
// console.log(b);
// console.log(multiply(5,2));

//My prediction = 6,10


//#3

// var x = [1,2,3,4,5,10];
// for(var i=0; i<5; i++)
// {
//     i = i + 3; 
//     console.log(i);
// }

//My predition = 3,7


//#4

// var x=15;
// console.log(x);
// function foo(){
//     var x=10;
//     console.log(x);
// }
// console.log(x);
// foo();
// console.log(x);

//My prediction = 15,15,10,15


//#5

// for(var i=0; i<15; i+=2){
//     console.log(i);
// }

//My prediction = 0,2,4,6,8,10,12,14



//#6

// for(var i=0; i<3; i++){
//     for(var j=0; j<2; j++){    
//         console.log(i*j);
//     }
// }

//My prediction = 0,0,0,1,0,2



//#7

// function foo(x,y){
//     for(var i=0; i<x; i++){
//         for(var j=0; j<x; j++){      
//             console.log(i*j);
//         } 
//     }
// }
// var z = foo(3,3);
// console.log(z);

//My prediction = 0,0,0,0,1,2,0,2,4, undefined (nothing returned to be passed into b value, only console logs run)

//#8

// function foo(x,y){
//     for(var i=0; i<x; i++){
//         for(var j=0; j<y; j++){  
//             console.log(i*j);
//         } 
//     }
//     return x*y;
// }
// var z = foo(3,5);
// console.log(z);

//My prediction: 0,0,0,0,0,0,1,2,3,4,0,2,4,6,8,15

                                                                    //PART 2

//#1
//Function should print all the integers from 1 to x. If x is negative, have it print/log "negative number' and have the function return false.

// function printUpTo(num){
//     for(i = 1; i <= x; i++){
//         console.log(i);
//         }
//     if (x < 0) {
//             console.log("negative number");
//             return "false";
//     }
// }
//   printUpTo(20);
//   var y = printUpTo(-10);
//   console.log(y);

//#2
//Function should print integers from 0 to 255, and with each integer, print the sum so far. Function should return the final sum.

// function printSum(num){
//     let sum = 0;
//         for (i = 0; i <= x; i++){
//             sum += i;
//             console.log(i);
//             console.log("sum is now: " + sum);
//         }
//     return "final sum is: " + sum;
// }
// console.log(printSum(10));

//#3
//Function should return the sum of all the values in a given array
// function printSumArray(arr){
//     var sum = 0;
//     for(var i=0; i<arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }
// console.log(printSumArray([5,5,5]));