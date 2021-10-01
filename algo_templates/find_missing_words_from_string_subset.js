// Given a string, and another string that is a subset of the first string, find the words that are missing in the second string from the first string.

function stringDiff (s, t){
    var arr = [];
    var str1 = s.split(" ");
    var str2 = t.split(" ");
    for (var i = 0; i < str1.length; i++){
        if (! (str2.includes(str1[i]))){
            arr.push(str1[i])
        }
    }
    return arr
}

console.log(stringDiff("Hello there I am Lisa", "Hello am"))