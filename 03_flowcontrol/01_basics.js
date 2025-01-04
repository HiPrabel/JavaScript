const isUserLoggedIn = true

// if ( 2 === 2 ){
//     console.log('executed');
// } else{
//     console.log('not executed');
// }

// <, >, <=, >=, ==, !=, ===
// &&, ||

const month = 4

// switch (month) {
//     case 1:
//         console.log('Jan');
//         break;
    
//     case 2:
//         console.log('Feb');
//         break;
        
//     case 3:
//         console.log('Mar');
//         break;

//     default: //if nothing matches
//         console.log('Default executed');
//         break;
// }

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined,NaN

// truthy values

// '0', 'false', ' ', [], {}, function(){}


// How to check Array since empty refers true

let arr = []

// if (arr.length === 0) {
//     console.log('array is empty');
// }

// var arr = []

const emptyObject = {}

// if (Object.keys(emptyObject).length === 0) {
//     console.log('since .keys return an array');
// }

//true values
// false == 0
// false == ''
// 0 == ''

//+++++++++++++++  Nullish Coalescing Operator (??): specially fornull undefined  +++++++++++++++++++
// accepts first values
let val1;;
val1 = 5 ?? 10
val1 = null ?? 10
val1 = undefined ?? 15
val1 = null ?? 10 ?? 15

console.log(val1);

// +++++++++++++++++++++  Ternary Operator  +++++++++++++++++++++++++++

// condition ? true : false

const price = 100
price <= 80 ? console.log('<=80') : console.log('>80')
