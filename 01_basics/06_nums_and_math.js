const score = 400;
//console.log(score);

const balance = new Number(100);
//console.log(balance);

//console.log(balance.toString().length);
//console.log(balance.toFixed(2));

//What is the difference b/w [const score = 400] & [const balance = new Number(400)]


const otherNumber = 123.8966;
//console.log(otherNumber.toPrecision(4));

const hundreds = 1000000;
//console.log(hundreds.toLocaleString());
//console.log(hundreds.toLocaleString('en-IN'));
//console.log(hundreds.toLocaleString('en-US'));

//In Competitive Programming we have given MAX_VALUE && MIN_VALUE.
//+++++++++++++DOUBT+++++++++++++++++++
const number = new Number;
// console.log(number.MAX_VALUE);
// console.log(number.MIN_VALUE);
// console.log(number.MIN_SAFE_INTEGER);
// console.log(number.POSITIVE_INFINITY);


//+++++++++++++++++++++++++++++++++++ MATHS +++++++++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));
// console.log(Math.round(19.4));
// console.log(Math.ceil(45.3));
// console.log(Math.floor(99.9));
// console.log(Math.sqrt(625));
// console.log(Math.max(11,22,33,44,55));
//console.log(Math.min(11,22,33,44,55));
//console.log(Math.random()); //Math.random() value always lie between [0,1)
// console.log((Math.random()*10) + 1); //[1,10)
// console.log(Math.floor(Math.random()*10) + 1);

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
