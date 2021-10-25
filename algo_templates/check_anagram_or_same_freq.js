// Given two arrays, determine whether the second array is an anagram of the first (words reordered in different sequence). Return true or false

function anagram(str1, str2){
    if (str1.length !== str2.length){ // If the lengths of the strings are different, they are immediately not anagrams
        return false;
    }
    let obj1 = {} // Set up empty objects to count frequency of each string character for each of the 2 strings
    let obj2 = {}
    for (let val of str1){ // of checks for values of arrays, etc.
        obj1[val] = ++obj1[val] || 0; // Frequency count for each string
    }
    for (let val of str2){
        obj2[val] = ++obj2[val] || 0;
    }
    for (let key in obj1){ // in checks for keys in objects
        if (!(key in obj2)){ // if the key isn't there, they're not anagrams (must include the same letters)
            return false
        }
        if (obj1[key] !== obj2[key]){ // if the key is there, but the value (number of times it occurs) is not equal, they're not anagrams
            return false
            }
        }
    return true; // If we've gotten this far, they are anagrams
}
console.log(anagram("anagram", "nagaram")) // true
console.log(anagram("", "")) // true
console.log(anagram("aaz", "zza")) // false
console.log(anagram("rat", "car")) // false
console.log(anagram("awesome", "awesom")) // false
console.log(anagram("qwerty", "qeywrt")) // true
console.log(anagram("texttwisttime", "timetexttwist")) // true


// Given two positive integers, deteremine if they have the same frequency of digits.
const sameFrequency = (num1, num2) => {
    const str1 = num1.toString()
    const str2 = num2.toString()
    if (str1.length !== str2.length){
        return false
    }
    let obj1 = {}
    let obj2 = {}
    for (let val of str1){
        obj1[val] = ++obj1[val] || 0;
    }
    for (let val of str2){
        obj2[val] = ++obj2[val] || 0;
    }
    for (let key in obj1) {
        if (!(key in obj2)){
            return false
        }
        if(obj1[key] !== obj2[key]){
            return false
        }
    }
    return true
}

console.log(sameFrequency(182,281)) //true
console.log(sameFrequency(34,14)) //false
console.log(sameFrequency(3589578,5879385)) //true
console.log(sameFrequency(22,222)) //false