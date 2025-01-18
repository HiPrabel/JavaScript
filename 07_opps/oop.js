// +++++++++++++++++++++++++++++++++++    object literal {}     ++++++++++++++++++++++++++++++++++++

const user = {
    username: 'kunal',
    loginCount: 8,
    signedIn: true,
    
    getUserDetails: function(){
        // console.log('got user details');
        // console.log(`Username: ${username}`); // error
        // console.log(`Username: ${this.username}`);
        // console.log(this);
    }
}

// console.log(user);
// console.log(user.username);
// console.log(user.getUserDetails);
// console.log(user.getUserDetails());
// console.log(this);

// +++++++++ context  ++++++++++++




// +++++++++++++++++++++++++++++++++++++    Constructor     ++++++++++++++++++++++++++++++++++++++++

// const date = new Date();

function User(userName, loginCount, isLoggedIn ) {
    this.userName = userName;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function (){
        console.log(`welcome ${this.userName}`);
        
    }
    return this //optional
}

// const userOne = User('kunal', 7, true)
// const userTwo = User('rahul', 9, false) // this overwrite previous value use new
// console.log(userOne);

const userOne = new User('kunal', 7, true)
const userTwo = new User('rahul', 9, false) 
// console.log(userOne);
// console.log(userTwo);
// console.log(userTwo.greeting());
console.log(userTwo.constructor); //reference to own




// +++++++++++++++++++++++++++++++++++++    Prototype      ++++++++++++++++++++++++++++++++++++++++



// +++++++++++++++++++++++++++++++++++++    Classes     ++++++++++++++++++++++++++++++++++++++++



// +++++++++++++++++++++++++++++++    Instances (new, this)     ++++++++++++++++++++++++++++++++++++



