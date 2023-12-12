//Example -> 1
let score = "33";
// console.log(typeof score);
// console.log(typeof(score));
let valueInNumber1 = Number(score);
// console.log(valueInNumber1);
// console.log(typeof valueInNumber1);
// console.log("\n");

//Example -> 2
let num = "33abc";
//console.log(typeof num);
//console.log(typeof(num));
let valueInNumber2 = Number(num);
//console.log(valueInNumber2);  //NaN (Not A Number)
//console.log(typeof valueInNumber2);
//console.log("\n");

// Example -> 3
let n = null;
//console.log(typeof n);
// console.log(typeof(n));
let valueInNumber3 = Number(n);
//console.log(valueInNumber3);
//console.log(typeof valueInNumber3);

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

// Example -> 4

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
//console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

// Example -> 5
let someNumber = 33;
let stringNumber = String(someNumber);
// console.log(stringNumber);
// console.log(typeof stringNumber);

// Example -> 6
let someString = "Babita";
let numeric = Number(someString);
// console.log(numeric);
// console.log(typeof numeric);

// ************************ Operations *********************

let value = 3;
let negValue = -value;
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/3);
// console.log(2%3); //remainder used in cryptography

let str1 = "hello";
let str2 = " Babita";
let str3 = str1 + str2;
// console.log(str3);

// console.log("1" + 2); // 12
// console.log(1 + "2"); // 12
// console.log("1" + 2 + 2); // 122
// console.log(1 + 2 + "2"); // 32

// console.log((3 + 4) * 5 % 3);

// console.log(true);
// console.log(+true);
// console.log(+"");

let num1, num2, num3;

num1 = num2 = num3 = 2 + 2;

let x = 3;
const y = x++;
console.log(`x:${x}, y:${y}`); //backtick way to write
// Expected output: "x:4, y:3"

// let n1 = 19;
// let n2 = 20;
// console.log(`n1:${n1}, n2:${n2}`);
// console.log(`n1:${n1+1}, n2:${n2+2}`);

let a = 3;
const b = ++a;

// console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"