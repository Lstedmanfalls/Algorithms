const six_mults = (start, end, mult) => {
    let num = start;
    while (num <= end){
        if(num % mult == 0)
        console.log(num);
        num++
    }
}
six_mults(6, 60000, 6)