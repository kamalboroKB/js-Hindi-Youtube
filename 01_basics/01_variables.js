const accountId = 144553
let accountEmail = "abc@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;
let accountKo;
//accountId = 2 // not allowed
accountEmail = "bcd@gmail.com"
accountPassword = 54123
accountCity = "bangalore"

console.log(accountId);

/*

prefer not to use var
because of issue in block scope and functional scope. 

*/


console.table([accountId, accountEmail, accountPassword, accountCity,accountState])
