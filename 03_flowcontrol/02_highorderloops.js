// for of
// for each
// for in (method)
// filter (method)

// ['', '', '']
// [{}, {}, {}]

// for (let i = 0; i <= 10; i++) {
//     console.log(i);
// }

const arr = [1, 2, 3, 4, 5]

// for (const i of arr) {
//     console.log(i);
// }

const greet = 'Hello World'

// for (const char of greet){
//     console.log(char);
// }

const map = new Map()
map.set('IN', 'India')
map.set('USA', 'United States of America')
map.set('Fr', 'France')
map.set('IND', 'India')
map.set('IN', 'India')

// console.log(map);

// for (const key of map) {  //for printing in array
//     console.log(key);
// }
//______________________________________________________________

// for (const [key, value] of map) {
//     console.log(key, ':', value);
// }

const myObj = {
    game1: 'NFS',
    game2: 'GTA'
}


// for (const [key, value] of myObj) {
//     console.log(key, ':', value);
// }

// *********************************  wrong => not possible   ******************************
// **************************  for iterating object use for in loop   *************************

// for (const key in myObj) {
//     console.log(`${key} : ${myObj[key]}`);
// }

// *********************************  key in array are indexes  ******************************

const languages = ['java', 'python', 'C', 'JS', 'ruby']

// for (const key in languages) {
//     console.log(key);
// }

// for (const key in languages) {
//     console.log(languages[key]);
// }

// *******************************  map is not iterable  *****************************

// ********************  for each loop (does not return any value)  *****************************

// languages.forEach( function (item) {
//     console.log(item);
// } )

// languages.forEach( (item) => {
//     console.log(item);
// } )

// function printme (item) {
//     console.log(item);
// }

// languages.forEach(printme)

// languages.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// })

const classs = [
    {
        id: 1234,
        name: 'kunal',
        age: 20
    },
    {
        id: 1235,
        name: 'vivek',
        age: 21
    },
    {
        id: 1236,
        name: 'Ram',
        age: 21
    },
];
 
// classs.forEach( (item) => {
//     console.log(item.name);
// }
// )

// for each does not rerturn for return value use filter which require condition

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]  

// const newnums = nums.filter( (num) => num > 5 )

//how to use it using foreach loop

const newnums = []

// nums.forEach( (num) => {
//     if (num > 5) {
//         newnums.push(num)
//     }
// });

// console.log(newnums);