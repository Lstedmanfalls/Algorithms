/* Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are. Example

There is one pair of color  and one of color . There are three odd socks left, one of each color. The number of pairs is .

Function has the following parameter(s):
    int n: the number of socks in the pile
    int ar[n]: the colors of each sock
Returns
    int: the number of pairs
*/

function findNumPairs(arr) {
    let tempObj = {}; 
    // empty object to store the values of the arr
    let pairs = 0;
    // Counter, starting at zero
    for (let value of arr){
        // for loop that iterates and gets the value inside the array (not the order)
        tempObj[value] = (tempObj[value] || 0)+1;
        // // The value in the key:value pair is set to: (or statements run with the first thing that's true, so checking the value of the key first has to be done)
        // If that key has a value (value was previously added as 1), then add one to it's value
        // If undefined (that key/value doesn't exist yet), set it to 0, then add one (so value becomes 1)
                // In a dictionary of {3:1}, dictionary[3] = 1 (it is the value of the key in the brackets)
        if (tempObj[value] == 2){
            // if the value is 2 (meaning a 1 was there and we added one to it, i.e., a match)
            pairs++;
            // Then we have a match and we add one to the match counter
            tempObj[value] = 0;
        //     // Then we reset the counter and move onto the next value in the array
        }
    }
    return pairs
}

console.log(findNumPairs([10,20,20,10,10,30,50,10,20]))