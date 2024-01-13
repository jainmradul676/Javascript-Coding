// data types are categorized based on how they're stored in memory and then accessed in code
// they're categorized into two types- primitive and non-primitive datatypes

// 1. Primitive type (Call by value) : whenever we access the data we dont get ref of memory, we just get copy of it
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

// 2. Non-primitve (Referenced type)
// Array, Objects, Functions

//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);
console.table([typeof heros,typeof myFunction,typeof myObj])
myFunction()

// https://262.ecma-international.org/5.1/#sec-11.4.3