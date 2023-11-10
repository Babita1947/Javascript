const accountId = 144553
let accountEmail = "babita@google.com"
var accountPassword = "12345"
accountCity = "Bengaluru" //we can write it directly but not more safe
let accountState;
// account = 2  // not allowed

accountEmail = "abc@google.com"
accountPassword = "21212121"
accountCity = "West Bengal"

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

// print
// console.log(accountId);
// console.log(accountEmail);
// console.log(accountPassword);
// console.log(accountCity);

// insteed of using console.log to print more we use "console.table([A,B,C,D,........])"
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);