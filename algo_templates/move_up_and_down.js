function countingValleys(steps, path) {
    // counter for valleys
    let count = 0;
    // counter for our level
    let level = 0;
    //loop over our path
    for(let i = 0; i < steps; i++) {
        // if the step is up
        if(path[i] == 'U'){ 
            level++;
            // valleys are finished always on Up and level becomes 0
            if(level == 0) {
                count++;
            }
        } else {
            // if step is down
            level--;
        }
    }
    // return the count after loop
    return count;
}

console.log(countingValleys(12, "DDUUDDUDUUUD"))