//-------------------------------------------------------------------
// A Quick Look on (Objects, Destructuring, and the Rest Operator)
//-------------------------------------------------------------------

// Basic Object Example
// Create an object to represent a student
const student = {
    name: null, // Student's name
    age: 21,     // Student's age
    skills: ["HTML", "CSS", "JavaScript"], // List of skills
};

      
    


// Accessing object properties
console.log("Student's Name: ", student.name); // Accessing using dot notation
console.log("Student's Age: ", student.age);
console.log("Student's Skills: ", student.skills.join(", ")); // Combine skills into a single string

// Object Destructuring

// Extract 'name' and 'age' properties directly into variables
const { name, age } = student; // const age = student.age;

console.log(`Destructured - Name: ${name}, Age: ${age}`);

// Rest Operator with Objects
// Collect the remaining properties into a 'details' object
const { skills, ...details } = student;
console.log("Skills: ", skills); // ['HTML', 'CSS', 'JavaScript']
console.log("Other Details: ", details); // { name: 'Ali', age: 21 }

//-------------------------------------------------------------------
// A Quick Look on (Arrays and Destructuring)
//-------------------------------------------------------------------

// Create an array of numbers
const numbers = [10, 20, 30, 40, 50];

// Destructuring Arrays
// Extract the first two numbers and collect the rest into a new array
const [first, second, ...rest] = numbers;
console.log("First Number: ", first); // 10
console.log("Second Number: ", second); // 20
console.log("Remaining Numbers: ", rest); // [30, 40, 50]

// Using the Rest Operator in Functions
// Define a function that accepts any number of arguments and sums them
function sum(...args) {
    return args.reduce((total, num) => total + num, 0); // Calculate the sum
}
console.log("Sum: ", sum(1, 2, 3, 4, 5)); // Output: 15

//-------------------------------------------------------------------
// A Quick Look on (The `this` Keyword)
//-------------------------------------------------------------------

// Example with a regular function in an object
const person = {
    name: "Mona",
    // The `this` keyword refers to the object itself
    greet() {
        console.log(`Hello, my name is ${this.name}`); // Accesses 'name' from the object
    },
};

person.greet(); // Hello, my name is Mona

// Arrow Functions and `this`
const personArrow = {
    name: "Sami",
    // Arrow functions don't bind their own `this`
    greet: () => {
        console.log(`Hello, my name is ${this.name}`); // `this` refers to the surrounding scope (not the object)
    },
};

personArrow.greet(); // Hello, my name is undefined

//-------------------------------------------------------------------
// A Quick Look on (Spread Operator)
//-------------------------------------------------------------------

// Combining arrays with the spread operator
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combined = [...array1, ...array2]; // Spread both arrays into a new one
console.log("Combined Array: ", combined); // [1, 2, 3, 4, 5, 6]

// Adding new properties to an object
const newStudent = { ...student, grade: "A" }; // Spread the student object and add a new property
console.log("New Student Object: ", newStudent);

//-------------------------------------------------------------------
// A Quick Look on (Optional Chaining)
//-------------------------------------------------------------------

// Optional chaining avoids errors when accessing nested properties
const user = {
    profile: {
        name: "Hassan",
    },
};

// Accessing properties safely
console.log(user.profile?.name); // Hassan
console.log(user.address?.city); // undefined (doesn't throw an error)

//-------------------------------------------------------------------
// A Quick Look on (Nullish Coalescing)
//-------------------------------------------------------------------

// The nullish coalescing operator (??) provides a fallback for null or undefined values
const userAge = null; // Assume the age is not provided
const defaultAge = userAge ?? 18; // Use 18 if userAge is null or undefined
console.log("User Age: ", defaultAge); // 18

//-------------------------------------------------------------------
// A Quick Look on (Template Literals)
//-------------------------------------------------------------------

// Use backticks for easier string formatting
const product = "Laptop";
const price = 15000;

// Embed variables and expressions in strings
console.log(`The price of the ${product} is EGP ${price}.`); // Output: The price of the Laptop is EGP 15000.
//-------------------------------------------------------------------
// A Quick Look on (forEach, map, filter, and reduce)
//-------------------------------------------------------------------

// An array of scores
const scores = [75, 80, 90, 50, 60];

// forEach: Loop through each score
scores.forEach((score) => console.log("Score: ", score));

// map: Create a new array with 10 points added to each score
const updatedScores = scores.map((score) => score + 10);
console.log("Updated Scores: ", updatedScores);

// filter: Get scores below or equal to 60
const passingScores = scores.filter((score) => score <= 60);
console.log("Passing Scores: ", passingScores);

// reduce: Calculate the total score
const totalScore = scores.reduce((total, score) => total + score, 0);
console.log("Total Score: ", totalScore);

//-------------------------------------------------------------------
// A Quick Look on (Sets and Maps)
//-------------------------------------------------------------------

// Sets: Store unique values
const uniqueNumbers = new Set([1, 2, 2, 3, 3, 4]); // Duplicates are removed
console.log("Unique Numbers: ", [...uniqueNumbers]); // Convert the set to an array

// Maps: Store key-value pairs
const studentGrades = new Map([
    ["Ali", 85],
    ["Sara", 90],
    ["Omar", 78],
]);

// Accessing values
console.log("Ali's Grade: ", studentGrades.get("Ali")); // 85

// Adding, deleting, and checking entries
studentGrades.set("Mona", 92); // Add a new student
console.log("Added Mona's Grade.");

studentGrades.delete("Omar"); // Remove a student
console.log("Removed Omar from the list.");

if (studentGrades.has("Sara")) {
    console.log("Sara is in the list.");
}

// Iterate through the Map
console.log("All Student Grades:");
studentGrades.forEach((grade, name) => {
    console.log(`${name}: ${grade}`);
});

// Display the number of students in the map
console.log("Total Students: ", studentGrades.size); // 3

// Clear the map
studentGrades.clear();
console.log("Map cleared. Total Students: ", studentGrades.size); // 0

// Define the Car class
class Car {
    // Constructor to initialize the properties of the car
    constructor(make, model, year) {
        this.make = make;  // The make (e.g., Toyota, Ford)
        this.model = model; // The model (e.g., Corolla, Mustang)
        this.year = year;  // The manufacturing year (e.g., 2020)
        this.isRunning = false; // A boolean to track if the car is running
    }

    // Method to describe the car
    describe() {
        console.log(`This car is a ${this.year} ${this.make} ${this.model}.`);
    }

    // Method to start the car
    start() {
        if (!this.isRunning) {
            this.isRunning = true;
            console.log("The car has started.");
        } else {
            console.log("The car is already running.");
        }
    }

    // Method to stop the car
    stop() {
        if (this.isRunning) {
            this.isRunning = false;
            console.log("The car has stopped.");
        } else {
            console.log("The car is already stopped.");
        }
    }
}

// Create a new instance of the Car class


const myCar = new Car("Toyota", "Corolla", 2020);

// Call the methods on the instance
myCar.describe();  // This car is a 2020 Toyota Corolla.
myCar.start();     // The car has started.
myCar.stop();      // The car has stopped.
