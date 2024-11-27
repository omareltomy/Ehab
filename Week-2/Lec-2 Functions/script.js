//-------------------------------------------------------------------
// Function Basics
//-------------------------------------------------------------------

// Defining a simple function
function greet(name) {
    console.log(`Hello, ${name}!`);
}
greet("Ali"); // Output: Hello, Ali!

// Function Expression
const sayHi = function (name) {
    console.log(`Hi, ${name}!`);
};
sayHi("Sara"); // Output: Hi, Sara!

// Arrow Functions (Shorter Way to Write Functions)
const greetArrow = (name) => console.log(`Greetings, ${name}!`);
greetArrow("Mona"); // Output: Greetings, Mona!

//-------------------------------------------------------------------
// Default Parameters
//-------------------------------------------------------------------

// Default parameters let you set a default value for a function argument.
function greetWithDefault(name = "Guest") {
    console.log(`Welcome, ${name}!`);
}
greetWithDefault(); // Output: Welcome, Guest!
greetWithDefault("Laila"); // Output: Welcome, Laila!

//-------------------------------------------------------------------
// Rest Parameters (Flexible Number of Arguments)
//-------------------------------------------------------------------

function sumAll(...numbers) {
    let total = 0;
    for (let number of numbers) {
        total += number; // Add each number to the total
    }
    console.log("Total Sum: ", total);
}
sumAll(1, 2, 3, 4, 5); // Output: Total Sum: 15

//-------------------------------------------------------------------
// The `this` Keyword
//-------------------------------------------------------------------

// `this` refers to the object calling the function.
const car = {
    brand: "Ford",
    start: function () {
        console.log(`The ${this.brand} car has started.`);
    },
};
car.start(); // Output: The Ford car has started.

// Arrow Functions and `this`
// Arrow functions do not bind their own `this`.
const bike = {
    brand: "Yamaha",
    start: () => {
        console.log(`The ${this.brand} bike has started.`); // `this` does not refer to the object
    },
};
bike.start(); // Output: The undefined bike has started.

//-------------------------------------------------------------------
// Callback Functions
//-------------------------------------------------------------------

// A function passed as an argument to another function.
function processUserInput(name, callback) {
    callback(name);
}
processUserInput("Ahmed", greet); // Output: Hello, Ahmed!

//-------------------------------------------------------------------
// Asynchronous Functions (Promises and Async/Await)
//-------------------------------------------------------------------

// Example of a Promise
const fetchData = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Data fetched successfully!");
    }, 2000);
});
fetchData.then((data) => console.log(data)); // Output: Data fetched successfully! (after 2 seconds)

// Async/Await (Easier Way to Handle Asynchronous Code)
async function fetchUserData() {
    console.log("Fetching user data...");
    const data = await fetchData; // Wait for the Promise to resolve
    console.log(data); // Output: Data fetched successfully!
}
fetchUserData();

//-------------------------------------------------------------------
// Immediately Invoked Function Expressions (IIFE)
//-------------------------------------------------------------------

// IIFE runs as soon as it’s defined.
(function () {
    console.log("This code runs immediately!");
})(); // Output: This code runs immediately!

