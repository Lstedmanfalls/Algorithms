function removeVals(x,y,z){
    x.splice(y, ((z-y))+1);
    return x;
}
console.log(removeVals([20,30,40,50,60,70],1,3));

// Alternative, without splice method:

function removeVals(x,y,z){
    x[y] = x[z+1];
    x.length = y+1;
    return x;
}
console.log(removeVals([20,30,40,50,60,70],2,4));