//-------------------------------------------------------------------
// A Quick Look on (Objects, Destructuring, and the Rest Operator)
//-------------------------------------------------------------------

// Basic Object Example
const student = {
    name: "Ali",
    age: 21,
    skills: ["HTML", "CSS", "JavaScript"],
};

console.log("Student's Name: ", student.name);
console.log("Student's Age: ", student.age);
console.log("Student's Skills: ", student.skills.join(", "));

// Object Destructuring
const { name, age } = student;
console.log(`Destructured - Name: ${name}, Age: ${age}`);

// Rest Operator with Objects
const { skills, ...details } = student;
console.log("Skills: ", skills);
console.log("Other Details: ", details);

//-------------------------------------------------------------------
// A Quick Look on (Arrays and Destructuring)
//-------------------------------------------------------------------

const numbers = [10, 20, 30, 40, 50];

// Destructuring Arrays
const [first, second, ...rest] = numbers;
console.log("First Number: ", first);
console.log("Second Number: ", second);
console.log("Remaining Numbers: ", rest);

// Using the Rest Operator in Functions
function sum(...args) {
    return args.reduce((total, num) => total + num, 0);
}
console.log("Sum: ", sum(1, 2, 3, 4, 5));

//-------------------------------------------------------------------
// A Quick Look on (The `this` Keyword)
//-------------------------------------------------------------------

const person = {
    name: "Mona",
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    },
};

person.greet(); // Hello, my name is Mona

// Arrow Functions and `this`
const personArrow = {
    name: "Sami",
    greet: () => {
        console.log(`Hello, my name is ${this.name}`); // `this` doesn't refer to the object in arrow functions
    },
};

personArrow.greet(); // Hello, my name is undefined

//-------------------------------------------------------------------
// A Quick Look on (Spread Operator)
//-------------------------------------------------------------------

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combined = [...array1, ...array2];
console.log("Combined Array: ", combined);

const newStudent = { ...student, grade: "A" };
console.log("New Student Object: ", newStudent);

//-------------------------------------------------------------------
// A Quick Look on (Optional Chaining)
//-------------------------------------------------------------------

const user = {
    profile: {
        name: "Hassan",
    },
};

console.log(user.profile?.name); // Hassan
console.log(user.address?.city); // undefined

//-------------------------------------------------------------------
// A Quick Look on (Nullish Coalescing)
//-------------------------------------------------------------------

const userAge = null;
const defaultAge = userAge ?? 18;
console.log("User Age: ", defaultAge); // 18

//-------------------------------------------------------------------
// A Quick Look on (Template Literals)
//-------------------------------------------------------------------

const product = "Laptop";
const price = 15000;

console.log(`The price of the ${product} is EGP ${price}.`);

//-------------------------------------------------------------------
// A Quick Look on (forEach, map, filter, and reduce)
//-------------------------------------------------------------------

const scores = [75, 80, 90, 50, 60];

// forEach
scores.forEach((score) => console.log("Score: ", score));

// map
const updatedScores = scores.map((score) => score + 10);
console.log("Updated Scores: ", updatedScores);

// filter
const passingScores = scores.filter((score) => score <= 60);
console.log("Passing Scores: ", passingScores);

// reduce
const totalScore = scores.reduce((total, score) => total + score, 0);
console.log("Total Score: ", totalScore);

//-------------------------------------------------------------------
// A Quick Look on (Sets and Maps)
//-------------------------------------------------------------------

// Sets
const uniqueNumbers = new Set([1, 2, 2, 3, 3, 4]);
console.log("Unique Numbers: ", [...uniqueNumbers]);

// Maps
// Create a Map to store student grades
const studentGrades = new Map([
    ["Ali", 85],
    ["Sara", 90],
    ["Omar", 78],
]);

// Accessing values
console.log("Ali's Grade: ", studentGrades.get("Ali")); // 85

// Adding a new student
studentGrades.set("Mona", 92);
console.log("Added Mona's Grade.");

// Removing a student
studentGrades.delete("Omar");
console.log("Removed Omar from the list.");

// Checking if a student exists
if (studentGrades.has("Sara")) {
    console.log("Sara is in the list.");
}

// Iterating over the Map
console.log("All Student Grades:");
studentGrades.forEach((grade, name) => {
    console.log(`${name}: ${grade}`);
});

// Size of the Map
console.log("Total Students: ", studentGrades.size); // 3

// Clearing the Map
studentGrades.clear();
console.log("Map cleared. Total Students: ", studentGrades.size); // 0


//-------------------------------------------------------------------
// A Quick Look on (Classes)
//-------------------------------------------------------------------

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
