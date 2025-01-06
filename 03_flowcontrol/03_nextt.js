const mynum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// console.log(mynum.filter( (num) => num > 5));

// console.log(mynum.map( (num) => num + 10))

//chaining

// const newnums = mynum
// .map( (num) => num * 10)
// .map( (num) => num+1)
// .filter( (num) => num>=51)

// console.log(newnums);

// reduce

// const total = mynum.reduce( (accumulator, currentValue) => {
//     console.log(`acc: ${accumulator} and currVal: ${currentValue}`);
//     return accumulator + currentValue
// }, 0)

// const total = mynum.reduce( (accumulator, currentValue) => {
//     console.log(`acc: ${accumulator} and currVal: ${currentValue}`);
//     return accumulator + currentValue
// }, 5)

// console.log(total);

// usecase example

const cart = [
    {
        name:'Book 1',
        price: 800,
    },
    {
        name:'Book 2',
        price: 900,
    },
    {
        name:'Book 3',
        price: 1600,
    },
    {
        name:'Book 4',
        price: 2400,
    },
]

const totalValue = cart.reduce( (acc, item) => acc + item.price, 0);
console.log(totalValue);