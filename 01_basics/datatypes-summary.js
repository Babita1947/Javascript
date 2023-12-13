//******************** Interview Perspective Questions***********************

//#1. Primitive
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

// JavaScript is Dynamically typed language
const score = 100; 
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

//console.log(id === anotherId);

const bigNumber = 34555333333364549645793063673957485n;
//console.log(bigNumber);

//#2. Reference (Non-primitive)
//    Array, Objects, Functions

//ARRAY
const heros = ["shaktiman", "naagraj", "doga"];
// for(let i=0;i<3;i++){
//    console.log(heros[i]);
//    console.log(" ");
// }

//OBJECTS
let myObj = {
    name: "hitesh",
    age: 22
}
//console.log(myObj.name);
//console.log(myObj.age);

//FUNCTIONS
const myFunction = function(){
    console.log("Hello World");
}
myFunction();
console.log(typeof myFunction);


