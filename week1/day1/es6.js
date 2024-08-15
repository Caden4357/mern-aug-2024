// * Scope - var, let & const
// * 3 main types of scope are: Global, Function, Block
// * var is func scoped if not defined globally 
// * both let and const are blocked scoped if not defined globally
// * block scoped variables cannot be redeclared 
var fName = "Caden";
let x = 10;
const y = 20;
//  redeclaring 
var fName = "Brandon";
// reassigning 
fName = "Sapphire";
x = 0;

function addNums(num1,num2){
    let sum = num1 + num2;
    if(num1 < num2){
        sum = 7;
    }
    console.log(sum);
    return sum;
}
console.log(addNums(2,4));

if (true) {
    let x = 20;
    console.log("X inside of block", x);
}
console.log("X outside of block", x);

// * const when using data structures 
// * const means the reference to the data structure is constant the data structure itself can be changed
const nums = [1, 2, 3, 4, 5]

const instructor = {
    fName: "Caden",
    lName: "Wilcox",
    age: 26
}
nums.push(6)
nums.pop()
instructor.age = 30;
console.log(nums);
console.log(instructor);
// nums = "Failed"

instructor.address = "123 blueberry ln";
console.log(instructor);

// functions es5
function sayHi(name) {
    return "Hello" + name;
}
sayHi("asd")
// arrow functions
const sayHiArrow = (name) => {
    return "Hello" + name;
}

const sayHiArrow2 = name => "Hello " + name;

const addNumsArrow = (num1, num2) => num1 + num2;
console.log(addNumsArrow(5, 4));
console.log(sayHiArrow2("Paul"));

sayHiArrow("asdfasdf");


const ages = [17, 26, 35, 41, 15]
const [num, age2] = ages
console.log(num, age2);


// const paul = student.fName;
// console.log(paul);
// const age1 = ages[0];
// const age2 = ages[1];


// rest and spread operator
// The rest operator is used to collect function arguments into an array, while the spread operator is used to spread the elements of an iterable (like an array or object) into individual elements or properties. They are syntactically similar but used in different contexts.

const ages2 = [...ages, 33]
console.log(ages2);

const newStudentData = { ...student, fName: "Yo" }
console.log(newStudentData);

const obj = {
    name: "John",
    arrowMethod: function() {
        console.log(this.name)
    }
};

const newObj = { ...obj, name: "Joe" }
//Logs the newObj object's properties
console.log(newObj)
//Executes the inherited arrowMethod on the newObj
newObj.arrowMethod()

