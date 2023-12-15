// Dates

let myDate = new Date();
// console.log(myDate);//2023-12-15T15:32:02.316Z
// console.log(myDate.toString());//Fri Dec 15 2023 21:02:02 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString()); //Fri Dec 15 2023
// console.log(myDate.toTimeString()); //21:03:40 GMT+0530 (India Standard Time)
// console.log(myDate.toLocaleString());//15/12/2023, 9:04:26 pm
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 2, 23);
// let myCreatedDate = new Date(2023, 0, 23, 5, 3);
// let myCreatedDate = new Date("2023-01-14");
let myCreatedDate = new Date("01-14-2023");
//console.log(myCreatedDate);
//console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));//Interview

let newDate = new Date();
console.log(newDate);
console.log(newDate.getHours());
console.log(newDate.getDay());
console.log(newDate.getMonth() + 1);

