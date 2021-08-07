/*1: Print odds 1-20
Print out all odd numbers from 1 to 20
The expected output will be 1, 3, 5, 7, 9, 11, 13, 15, 17, 19*/

for (let num = 0; num <= 20; num++){
    if(num %2 == 1){
        console.log(num);
    }
}


/*2: Sum and Print 1-5
Sum numbers from 1 to 5, printing out the current number and sum so far at each step of the way
The expected output will be: Num: 1, Sum: 1, Num: 2, Sum: 3, Num: 3, Sum: 6, Num: 4, Sum: 10, Num: 5, Sum: 15*/

let sum = 0;
for (let num = 1; num <=5; num++){
    console.log("Num:" + num);
		sum = (sum+num);
    console.log("Sum:" + sum);
}