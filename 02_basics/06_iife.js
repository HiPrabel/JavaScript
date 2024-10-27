// Immediately Invoked Function Expression (IIFE)

// Syntax: (function)()

// function example(){
//     console.log('DB Connected');
// }

// example()

// named iife
(function example(){
    console.log('DB Connected');
})(); //put ; always (try by removing)

( () => {
    console.log('DB connected 2');
})();


//simple iife / unnamed iife
( (name) => {
    console.log(`DB connected 2 ${name}`);
})('kunal');

example()