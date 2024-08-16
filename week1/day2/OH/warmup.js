// practice with arrow functions loops and conditionals 

// * Write a function that takes in a number and returns the number multiplied by 2
const multiply = num => num*2
console.log(multiply(4));

const multiplied = (num) => {
    return num*2
}
// * Write a function that takes in an array of numbers and returns an array (can be a new array) with each number multiplied by 2
let nums = [3,4,5,6,7,8]
const multiplyArray = arr => {
    let result = []
    for(var idx = 0; idx < arr.length; idx++){
        let num = arr[idx]
        // multiply the current number by 2 
        // push that number into result array 
        result.push(arr[idx]*2)
    }
    return result
}
console.log(multiplyArray(nums));

// class solutions below 

//
// const mul = (arr) = >
// {
// for (let i = 0 ; i<arr.length; i++)
// {
// num = arr[i]*2;
// arr[i].push(num)
// }
// return arr;



// Pauls solution using map method 
let timesTwo = (num) => num *2;
let newArr = nums.map(timesTwo);
console.log(newArr)


// * Write a function that takes in an array and returns a new array with only the even numbers
const evenNums = arr => {
    let result = []
    // for (let index = 0; index < array.length; index++) {
    //     const element = array[index];
        
    // }
    arr.forEach(num => {
        // conditonal (ternary) using modulus
        if(num % 2 == 0){
            result.push(num)
        }
    });
    return result
}
// console.log(evenNums(nums));

const evenNumsTernary = arr => {
    let result = []
    arr.forEach(num => num % 2 == 0? result.push(num): null);
    // if(num % 2 == 0){
    //     result.push(num)
    // }else{
    //     return null
    // }
    return result
}
console.log(evenNumsTernary(nums));



const planet = {
	name:"Jupiter",
	milesFromSun: 49849,
	mass: 393983,
    composition: ["gas", "liquid", "oxygen"]
}
const planetCopy = {...planet}
console.log(planet.composition[0] === planetCopy.composition[0]) // true 
console.log(planet === planetCopy) // false

const {mass: massOfPlanet} = planet
console.log(massOfPlanet);

// planet: Reference #1234 → { name, milesFromSun, mass, composition (Ref: #5678) }
// planetCopy: Reference #2345 → { name, milesFromSun, mass, composition (Ref: #5678) }