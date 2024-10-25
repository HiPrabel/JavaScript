"use strict"; // treat all JS code as newer version

// alert( 3 + 3 ) //we are using nodejs, not browser

// console.log( 3 + 3)

let name = "kunal"
let age = 20
let isLoggedIn = false
let temp = null
let state; //undefined

// number => 2 to power 53
// BigInt
// String => ""/''
// Boolean => true/false
// null => standalone value
// undefined
// Symbol => unique components

// Object

// console.log(typeof "vivek");
// console.log(typeof age);
// console.log(typeof null); //object
// console.log(typeof undefined);

// Non-Primitive Datatypes

//Array, Objects, Functions

const fruits = ['apple', 'banana', 'mango', 'Orange'];
let myObj = {
    name: 'Kunal',
    age: 20,
}

const myfunction = function(){
    console.log("Hello World");
}

console.log(typeof  fruits);
console.log(typeof  myObj);
console.log(typeof  myfunction);