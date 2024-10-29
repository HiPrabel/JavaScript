// literal => not singleton
// constructor => singleton  Object.create

// objects literals

const mySym = Symbol('key1')
// console.log(typeof mySym);


const example = {
    name: 'Harsh',
    age: 20,
    email: "harsh@gmail.com",
    present: ['Mon', 'Tues', 'Fri'],
    // mySym: 'key2',
    [mySym]: "key2",
}

// console.log(example.age);
// console.log(example['name']); 
//important how to declare symbol in object use [] and declare it before
// console.log(typeof example.mySym);
// console.log(example[mySym]); //symbols always declared and accessed using square brackets
// console.log(Object.values(example));
// console.log(Object.keys(example));
// console.log(Object.entries(example));
// console.log(example.hasOwnProperty('present'));

// example.age = 21
// Object.freeze(example)
// console.log(example['age']);
// example.age = 25
// console.log(example.age);
// console.log(example); //notice the symbol already defined because using [] also try another

example.greeting = function(){
    console.log('Hello world');
}

example.greeting2 = function(){
    console.log(`Hello ${this.name}`);
}

// console.log(example.greeting); // gives anonymous as content of function
// console.log(example.greeting.toString()); //to get the content

// console.log(example.greeting());
// console.log(example.greeting2());

// Object Constructor

// const user = new Object()

// user.id = '123'
// user.name = 'Sam'
// user.isLoggedIn = false

// console.log(user);

const user3 = {
    email: 'sam@gmail.com',
    fullname: {
        username: {
            firstname: 'kunal',
            lastname: 'choudhary'
        }
    }
}

// console.log(user3.fullname.username.firstname);

const obj1 = {1: 'a', 2: 'b'}
const obj2 = {3: 'c', 4: 'd'}
const obj3 = {3: 'e', 4: 'f'}

// const obj4 = {obj1, obj2} //does not combine
// const obj4 = Object.assign({}, obj1, obj2, obj3) // empty obj since all values are getting added in obj1 also does not repeat
// const obj4 = {...obj1, ...obj2, ...obj3}

// console.log(obj4);
// console.log(obj4)
// console.log(obj1); //try by removing {}

// ++++++++++++  Object Destructure  ++++++++++++++++++

const course = {
    coursename: 'DSA',
    courseDuration: '6 months',
    coursePrice: 500,
}

// console.log(course.coursePrice); //looks messy when more elements

// const {coursePrice : price} = course // const {originalName : newName} = objectName
// console.log(price);

