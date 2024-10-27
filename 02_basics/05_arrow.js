const user = {
    name: 'kunal',
    price: 999,
    welcome: function(){
        console.log(`${this.name}, welcome to website`);
        console.log(this);
    }
}

// user.welcome()
// user.name = 'sam'
// user.welcome()

// console.log(this);

// function test(){
//     console.log(this);
// }

// function test(){
//     let username = 'kunal'
//     console.log(this);
// }

// function test(){
//     let username = 'kunal'
//     console.log(this.username);
// }

// const test = function (){
//     let username = 'kunal'
//     console.log(this.username);
// }


// const test = () => {
//     let username = 'kunal'
//     console.log(this.username);
// }

// const test = () => {
//     let username = 'kunal'
//     console.log(this);
// }

// test()

// const add2 = (num1, num2) => {
//     return num1 + num2
// }

// const add2 = (num1, num2) => num1 + num2

// const add2 = (num1, num2) => (num1 + num2) //when {} use return

// const add2 = (num1, num2) => {username: 'kunal'} //not allowed get confused by {} use ()

// const add2 = (num1, num2) => ({username: 'kunal'})

console.log(add2());






