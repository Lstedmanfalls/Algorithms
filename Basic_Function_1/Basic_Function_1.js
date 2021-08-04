How many out of 15 did you predict correctly?
//13

#1 function a(){
    return 35;
}
console.log(a())
//My prediction = 35

#2 function a(){
    return 4;
}
console.log(a()+a());
//My prediction = 8

#3 function a(b){
    return b;
}
console.log(a(2)+a(4));
//My prediction = 6

#4 function a(b){
        console.log(b);
        return b*3;
    }
    console.log(a(3));
//My prediction = 3, 9 

#5 function a(b){
    return b*4;
    console.log(b);
}
console.log(a(10));
//My prediction = 40

#6 function a(b){
    if(b<10) {
        return 2;
    }
    else     {
        return 4;
    }
    console.log(b);
}
console.log(a(15));
//My prediction = return 4, log 15 - wrong because the return stops the function, and return won't show without printing the function

#7 function a(b,c){
    return b*c;
}
console.log(10,3);
console.log( a(3,10) );
//My prediction = 10, 3, 30

#8 function a(b){
    for(var i=0; i<10; i++){
        console.log(i);
    }
    return i;
}
console.log(3);
console.log(4);
// My Prediction = 3, 4

#9 function a(){
    for(var i=0; i<10; i++){
        i = i +2;
        console.log(i);
    }
}
a();
//My Prediction = 2, 5, 8, 11

#10 function a(b,c){
    for(var i=b; i<c; i++) {
        console.log(i);
    }
    return b*c;
}
a(0,10);
console.log(a(0,10));
//My prediction = 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, return = 0 (won't show), 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, return = 0 (will show)

#11 function a(){
    for(var i=0; i<10; i++){
        for(var j=0; j<10; j++){
            console.log(j);
        }
        console.log(i);
    }
}
//My prediction = nothing will return or print, function not invoked

#12 function a(){
    for(var i=0; i<10; i++){
        for(var j=0; j<10; j++){
            console.log(i,j);
        }
        console.log(j,i);
    }
}
//my prediction = nothing will return or print, function not invoked

#13 var z = 10;
function a(){
    var z = 15;
    console.log(z);
}
console.log(z);
//My prediction = 10

#14 var z = 10;
function a(){
    var z = 15;
    console.log(z);
}
a();
console.log(z);
//My prediction = 15, 10

#15 var z = 10;
function a(){
    var z = 15;
    console.log(z);
    return z;
}
z = a();
console.log(z);
//my prediction = 10 - wrong, because var z will change to take on the function value, even without saying var or let.. because JavaScript :/


















