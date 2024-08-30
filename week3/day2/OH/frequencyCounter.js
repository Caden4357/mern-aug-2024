// * Frequency counter
// * frequency counters using objects to collect values/frequencies of values 

// 'hello' -> {h:1, e:1, l:2, o:1}
// 1.) write a function that takes in a string 
// 2.) define an empty object to return at the end
// 3.) loop over the string 
// 4.) 

// Edge cases
// capital vs lowercase??
// spaces, numbers, special characters??


const frequencyCounter = (str) => {
    const result = {};
    for (let idx = 0; idx < str.length; idx++) {
        const char = str[idx];
        if(result[char]){
            result[char]++
        }else{
            result[char] = 1;
        }
    }
    return result
}

const frequencyCounterRefactored = (str) => {
    const result = {};
    for (let idx = 0; idx < str.length; idx++) {
        const char = str[idx];
        result[char] = (result[char] || 0) + 1
    }
    return result
}

// console.log(frequencyCounterRefactored("hello"));
// const obj = {}
// obj['h'] = 1;
// console.log(obj);


// Valid anagram
// a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.
// 'aaz', 'zza' -> false
// 'anagram', 'nagaram' -> true
// 'rat', 'car' -> false
// cinema iceman -> true
// caden bob -> false

// compare the length of each string if not equal return false 
// start with a frequency counter for each string 
// compare the 2 to see if they match 
const anagram = (str1, str2) => {
    if(str1.length !== str2.length){
        return false;
    }
    const result1 = frequencyCounter(str1)
    console.log(result1);
    // loop through string2 subtracting from result1 if the char is found if its not return false 
    for(let char of str2){
        if(!result1[char]){
            return false;
        }
        else{
            result1[char] -= 1
            console.log(result1);
        }
    }
    return true

}
console.log(anagram("iceman", "cinema"));
console.log(anagram("aaz", "zza"));
