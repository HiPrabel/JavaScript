// const score = 87
// console.log(score);

// const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString()); // to use methods of string on number
// console.log(balance.toFixed(3));

// const num = 123.4567

// console.log(num.toPrecision(3)); //use careflly try next
// console.log(num.toPrecision(2));
// console.log(num.toPrecision(5));

// const num2 = 100000000
// console.log(num2.toLocaleString());
// console.log(num2.toLocaleString('en-IN'));

// +++++++++++++++++++++++++++++  Maths  ++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-6.5));
// console.log(Math.round(-6.5));
// console.log(Math.ceil(6.2));
// console.log(Math.floor(-6.9));

// console.log(Math.min(1, 4, 5, 8, 7, 5, 1, 6, 7));
// console.log(Math.max(1, 4, 5, 8, 7, 5, 1, 6, 7));

console.log(Math.random()); //between 0-1
console.log((Math.random()*10) + 1 ); 
console.log(Math.floor((Math.random()*10) + 1 )); 

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
