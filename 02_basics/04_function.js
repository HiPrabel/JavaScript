//  function name(){
//     console.log('S');
//     console.log('A');
//     console.log('M');
//  }

//  name()

// function add2(num1, num2){   // parameters
//    console.log(num1 + num2);
// }

// add2()
// add2(2, 4) // arguments
// add2(4, '3')
// add2(2, null)
// const result = add2(2, 4)
// console.log(result);

// function add2(num1, num2){
//    console.log('kunal')
//    console.log(`Kunal scored: ${num1 + num2}`);
//    return num1 + num2
//    console.log('kunal') // unreachable code after return statement
// }

// const res = add2(55, 45)
// console.log(`Result: ${res}`);

// function msg(name){  // if arguments not passed then considered undefined
   // function msg(name = 'sam')  //to assign default value
   // if (name === undefined){
   //    console.log('please enter name');
   //    return
   // }

//    if (!name){
//       console.log('please enter name');
//       return
//    }

//    return `${name} logged in`
// }

// console.log(msg);
// console.log(msg());
// console.log(msg('kunal'));


// function calculatePrice(...num1){
//    return num1
// }

// console.log(calculatePrice(200, 400, 500, 5000));

// function calculatePrice2(val1, val2, ...num1){
//    return num1
// }

// console.log(calculatePrice2(200, 400, 500, 5000));

// const prod = {
//    name: 'Tablet',
//    price: 8000,
// }

// function detail (anyObject){
//    console.log(`${anyObject.name} will cost ${anyObject.price} dollars`);
// }

// detail(prod)
// detail({
//    name: 'Laptop',
//    price: 20000
// })

// function element (newArray){
//    console.log(newArray[1]);
// }

// element ([200, 500, 600, 250, 154, 48, 63, 54])

// ++++++++++++++  mini hoistiing  ++++++++++++++++++


// console.log(addOne(5));
// has global scope
// function addOne(num){
//    return num + 2
// }

// adddTwo(6)  // will give error
// const addTwo = function(num){
//    return num + 2
// } 

