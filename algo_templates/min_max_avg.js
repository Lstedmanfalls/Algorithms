function arr2(x){
    var sum = 0;
    var max = x[0];
    var min = x[0]; 
    for (var i = 0; i < x.length; i++){
        if (x[i] > max){
            max = x[i];
            }
        if (x[i] < min){
            min = x[i]
            }
        sum += x[i];
        }
    var avg = sum/x.length;
    return max, min, avg
}
console.log(arr2([0,-20,100,-6]))