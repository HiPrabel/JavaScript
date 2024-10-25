const accountId = 1245;
let accountEmail = "abc@gmail.com";
var accountPassword = "123456";
accountCity = "Delhi";

// accountId = 2; // not allowed
accountEmail = "123@gmail.com"; // scope based
accountPassword = "654321"; // not scope based global
accountCity = "Mumbai"; //declared as global
let accountState;

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

/*
Prefer not to use var to avoid block scope
*/
