function staircase(n){
    let poundTimes = 1
    let spaceTimes = n-1
    let space = " "
    let pound = "#"
    for (let i = 0; i < n; i++) {
        let newStr = space.repeat(spaceTimes) + pound.repeat(poundTimes);
        console.log(newStr)
        spaceTimes--
        poundTimes++
    }
}

console.log(staircase(6));