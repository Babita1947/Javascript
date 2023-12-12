const accountId = 144553;
let accountEmail = "hitesh@gmail.com";
var accountPassword = "12345";
accountCity = "Jaipur"; 

//Theory
//const -> ab isko change nhi kiya jaa sakta jo v value ek baar assign ker ab wo lock ho gya

// accountId = 2; // Not allowed
accountEmail = "hiteshgmail.com";
accountPass = "2121212121";
accountCity = "Bangaldesh"; //In javascript it is possible to store data in a variable without declare its data type i.e let, const, var (NOTE: # it's possible but not correct)

let accountState; // value is declare without initialising it then it assigns undefined value
console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

// Tabular way to print datas
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
