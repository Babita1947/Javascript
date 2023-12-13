const name = "hitesh";
const repoCount = 50;

//console.log(name + repoCount + " Repositoris in GitHub");  //Not used in nowdays 

//In modern use Backticks (``) [known as String Interpollation]
//[NOTE: Because this method is more readable and reliable]

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// Another way of declaration of String 
const gameName = new String('Babita-BY');

//console.log(gameName[0]);
//console.log(gameName.__proto__);

//console.log(gameName.length);
//console.log(gameName.toUpperCase());
//console.log(gameName.charAt(2));
//console.log(gameName.indexOf('o'));

const newString1 = gameName.substring(0,6);
const newString2 = gameName.substring(7,9);
//console.log(newString1);
//console.log(newString2);

const anotherString1 = gameName.slice(0,6);
//we can take argument in slice by passing negative indexes 
const anotherString2 = gameName.slice(-8,9);
console.log(anotherString1);
console.log(anotherString2);

const trimString = "   Babita Kumari    ";
console.log(trimString);
console.log(trimString.trim()); //trim function [trim(),trimStart(),trimEnd()]
console.log(trimString.trimStart());

const url = "https://hitesh.com/hites%20choudhary";

console.log(url.replace('%20','-'));
console.log(url.includes('hitesh'));
console.log(url.includes('kumari'));

const arr = new String('hitesh-hc-com');

console.log(arr.split('-'));


