// write a function takes in an object and returns an array of all the values in the object that are numbers

// solution 1
const obj = {
    "a":1,
    "b":"b",
    "c":"5",
    "d":32,
    "e":4,
    "f":9,
}

// 1.) define a function with 1 param for the object numFinder(obj)
// 2.) itterate over the obj using for in...
// 3.) check to see if the value is a number?
// ...
const numFinder = (ob) => {
    const result = []
    for(const key in ob){
        const val = ob[key]
        if(typeof val === 'number'){
            result.push(val)
        }
    }
    return result
}
console.log(numFinder(obj));


// https://www.hackerrank.com/challenges/cats-and-a-mouse/problem?isFullScreen=true
// Two cats and a mouse are at various positions on a line. You will be given their starting positions. Your task is to determine which cat will reach the mouse first, assuming the mouse does not move and the cats travel at equal speed. If the cats arrive at the same time, the mouse will be allowed to move and it will escape while they fight.

// our function will take 3 params x,y,z x=catA y=catB z=mouseC
// we need to determine which number is closer to z 
// subtract both x and y from z and determine which one is closer 

const catsAndMouse = (x,y,z) => {
    let catA = Math.abs(x-z)
    let catB = Math.abs(y-z)
    if(catA === catB){
        return "Mouse C"
    }else if(catA < catB){
        return "Cat A"
    }
    else{
        return "Cat B"
    }
}
console.log(catsAndMouse(1,3,2));

// solution to cats and a mouse


// https://www.hackerrank.com/challenges/migratory-birds/problem?isFullScreen=true

// solution to migratory birds
