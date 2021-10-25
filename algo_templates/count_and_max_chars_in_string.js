// Given a string, count the number of times each character appears in the string. Characters are alphanumeric (A-Z and 0-9), and case doesn't matter (lowercase h == uppercase H)

const charCount = (str) => {
    const obj = {}; // Initiate empty object
    for (let char of str){ // For each element in a string, shorthand for loop
        if (isAlphaNumeric(char)) { // If the result of the below function is true
            char = char.toLowerCase(); // Make the character lowercase
            obj[char] = ++obj[char] || 1; // If the key is in the object already, add 1 to its value, if it's not in the object, add the key to the object and make it's value 1
        }
    }
    // This sorts each key alphabetically if want to
    sorted = Object.keys(obj) // Creates an array of the keys in the object (e.g., ["h", "i", "t"])
    .sort() // Sorts the items (the keys) in the array
    .reduce((acc, key) => ({ // Reduce method does a function on each element of the array. Acc is the previous value (current), key is the current value (new value)
        ...acc, // The first argument is the previous value (acc = accumulator). The first time it's 0, then it adds the value for each item of the array.
        [key]: obj[key] // The second argument (new value) is going to be a key object pair
    }),{}); //The third thing we're saying is what we want the start to be. We're saying just start with blank dictionary.
}

// This is a validation to only count letters and numbers in the string (not spaces or punctuation)
const isAlphaNumeric = (char) => {
    const code = char.charCodeAt(0);
    if (!(code > 47 && code < 58) && // These are ASCII codes for 0-9
    !(code > 64 && code < 91) && // These are ASCII codes for A-Z
    !(code > 96 && code < 123)){ // These are ASCII codes for a-z
        return false;
    }
    return true;
}

// This finds which letter occurs most in the string (key with the highest value). Returns the letter and how many times it occurs
const maxChar = () => {
        let arr = Object.values(sorted);
        let max = Math.max(...arr);
        let char = Object.keys(sorted).reduce((a, b) => sorted[a] > sorted[b] ? a : b);
        return char + " " + "is the max, and it occurs " + max + " times"
}

charCount("Hi there! My name is Hethero.");
console.log(maxChar())