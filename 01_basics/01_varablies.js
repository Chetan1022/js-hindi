// never use var 
const accountId = 142454 // in const it cannot change value
let accountEmail = "vchetan989@gmail.com"
var accountPassword = "12345"
accountCity = "hisar" 
let accountState;
 
//accountId = 2 // not allowed
accountEmail = "sjlkj@gmail.com"
accountPassword = "23231215"
accountCity = "hansi" 
console.log(accountId);

console.table([accountEmail,accountId,accountPassword,accountCity,accountState])