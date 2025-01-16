// // create promise function 
// const promiseOne = new Promise(function(resolve, reject) {
//     // Do an async task
//     // DB calls, cryptogrophy, network
//     setTimeout( function() {
//         console.log('Async task is complete');
//         resolve() //this connects then call below with this function try running without this line then statement will not be execcted
//     }, 1000)
// })

// // .then has connection with resolve
// // using Promise created above
// promiseOne.then( function(){
//     console.log('promise consumed');
// })

// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('task two completed');
//         resolve()
//     }, 1000)
// }).then(() => {
//     console.log('async 2 resolved');
// })

// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({name: 'kunal', age: 20})
//     }, 1000)
// })

// promiseThree.then(function(user){
//     console.log(user);
// })


// const promiseFour = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('start');
//         let error = false
//         if (!error){
//             resolve({name: 'kunal', age: 20})
//         } else {
//             reject('Error: Something went wrong')
//         }
//     }, 1000)
// })

// promiseFour.then((user) => {
//     console.log(user);
//     return user.name;
// }).then((name) => {
//     console.log(name);
// }).catch((error) => {
//     console.log('error');
// }).finally(() => {
//     console.log('End');
// })

// const promiseFive = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = false
//         if (!error){
//             resolve({name: 'rahul', age: 20})
//         } else {
//             reject('Error: Something went wrong')
//         }
//     }, 1000)
// })

// // when using this method u have to handle error manually
// async function consumePromiseFive(){
//     try {
//         const response = await promiseFive
//         console.log(response);
//     } catch (error) {
//         console.log('error');
//     }
// }

// consumePromiseFive()

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// async function getUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

// getUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
})
