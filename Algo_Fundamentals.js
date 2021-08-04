// 1) Set myNumber to 42. Set myName to your name. Now swap myNumber into myName & vice versa.

function swap(num, name){
    var myNumber = num;
    var myName = name;
    var temp = myNumber;
    myNumber = myName;
    myName = temp;
    console.log("My number is now: " + myNumber + ", and my name is now: " + myName)
}
swap(42, "Lisa")


// 2) Print integers from -52 to 1066 using a FOR loop.

function ints(start, end){
    for (var num = start; num <= end; num++){
    console.log(num);
    }
}
ints(-52, 1066)


// 3) Create beCheerful(). Within it, console.log string "good morning!" Call it 98 times.

function beCheerful(times){
    var sum = 0;
    for (i = 0; i < times; i++){
    console.log("good morning!");
    sum += 1
    }
    return "You called this function " + sum +" times"
}
console.log(beCheerful(98))


// Using FOR, print multiples of 3 from -300 to 0. Skip -3 and -6.

function three_mults(start, end, mult, skip1, skip2){
    for (var num = start; num <= end; num ++){
        if (num == skip1 || num == skip2){
            continue;
        }
        if (num %mult == 0){
            console.log(num)
        }
    }
}
three_mults(-300, 0, 3, -3, -6)


//Print integers from 2000 to 5280, using a WHILE

function some_ints(start, end){
    var num = start;
    while (num <= end){
        console.log(num);
        num++;
    }
}
some_ints(2000, 5280)


// If 2 given numbers represent your birth month and day in either order, log "How did you know?", else log "Just another day...."

function birthday(num1, num2){
    if ((num1 == 01 && num2 == 13) || (num1 == 13 && num2 == 01)){
        console.log("How did you know?")
    }
    else{
        console.log("Just another day....")
    }
    }
birthday(01,13)
birthday(13,01)
birthday(02,17)


// Write a function that determines whether a given year is a leap year. If a year is divisible by four, it is a leap year, unless it is divisible by 100. However, if it is divisible by 400, then it is a leap year.

function leap_year(year){
    if ((year % 4 == 0) && (year % 100 !==0) || (year % 400 == 0)){
        console.log("It is a leap year")
    }
    else{
        console.log("It is not a leap year")
    }
}
leap_year(4)
leap_year(100)
leap_year(400)
leap_year(1995)


// Print all integer multiples of 5, from 512 to 4096. Afterward, also log how many there were.

function five_mults(start, end, mult){
    var sum = 0;
    for (var num = start; num <=end; num ++){
        if (num % mult == 0){
            sum ++;
            console.log(num);
        }
    }   
console.log("There were " + sum + " multiples of 5");
}
five_mults(512, 4096, 5)


// Print multiples of 6 up to 60,000, using a WHILE.

function six_mults(start, end, mult){
    var num = start;
    while (num <= end){
        if(num %mult == 0)
        console.log(num);
        num++
    }
}
six_mults(6, 60000, 6)


// Print integers 1 to 100. If divisible by 5, print "Coding" instead. If by 10, also print " Dojo".

function five_ints(start, end){
    for (var num = start; num <= end; num ++){
        if (num % 5 == 0){
            console.log("Coding")
        }
        if (num % 10 == 0){
            console.log("Dojo")
        }
        else{
            console.log(num)
        }
    }
}
five_ints(1, 100)


// Your function will be given an input parameter incoming. Please console.log this value
function value(incoming){
    console.log(incoming);
}
value(5)


// Add odd integers from -300,000 to 300,000, and console.log the final sum. Is there a shortcut?
function sum_odd(start, end){
    var sum = 0;
        for (var num = start; num <= end; num ++){
            if (num %2 !==0){
                sum += num;
            }
        }
    console.log("The final sum is " + sum)
}
sum_odd(-300000, 300000)

// Log positive numbers starting at 2016, counting down by fours (exclude 0), without a FOR loop.

function pos_nums(start, end, mult){
    var num = start;
    while (num >= end){
        if(num == end){
            break
        }
    console.log(num);
    num = num + mult;
    }
}
pos_nums(2016, 0, -4)

// Based on earlier “Countdown by Fours”, given lowNum, highNum, mult, print multiples of mult from highNum down to lowNum, using a FOR. For (2,9,3), print 9 6 3 (on successive lines).

function flex_count(lowNum, highNum, mult){
    for (var num = highNum; num >= lowNum; num -= mult){
        console.log(num);
    }
}
flex_count(2, 9, 3)