// "use strict"; //Strict mode changes previously accepted "bad syntax" into real errors helping us write cleaner code.
let i = 10; 
document.getElementsByClassName("header").innerHTML =  i ;

//-------------------------------------------------------------------
// Quick revision on (if statements)
//-------------------------------------------------------------------

// const x = 1;
// const y = 0;
// const z = y > x;

// if (x) {
//     console.log("X is TRUE");
// } else {
//     console.log("X is FALSE");
// }
// if (!y) {
//     console.log("Not Y is TRUE");
// } else {
//     console.log("Not Y is False");
// }
// if (z) {
//     console.log("Z is TRUE");
// } else {
//     console.log("Z is False");
// }

// if (z) {
//     console.log("Z is True");
// } else if (z || x){
//     console.log("Z or X is TRUE");
// } else if (true) {
//     console.log("This condition is TRUE");
// } if (z && x) {
//     console.log("That condition was False");
// } else {
//     console.log("Z && x was false");
// }

//-------------------------------------------------------------------
// A Quick look on (Switch) Statements
//-------------------------------------------------------------------

// let day;
// switch (new Date().getDay()) {
//     case 0:
//       day = "Sunday";
//       break;
//     case 1:
//       day = "Monday";
//       break;
//     case 2:
//        day = "Tuesday";
//       break;
//     case 3:
//       day = "Wednesday";
//       break;
//     case 4:
//       day = "Thursday";
//       break;
//     case 5:
//       day = "Friday";
//       break;
//     case 6:
//       day = "Saturday";
// }
//   console.log(day);

//-------------------------------------------------------------------
// A Quick look on (Arrays)
//-------------------------------------------------------------------

// const fruits = ["apples", "bananas", "oranges"];
// console.log(fruits[1]);
// console.log(fruits.length);
// fruits.push("grapes","mango");
// console.log(fruits[fruits.length -1]);
// fruits.pop(0);
// console.log(fruits);

// function display(v, i){
//     console.log("Item ", ++i, "is ", v);
// }
// fruits.forEach(display);

// fruits.forEach((v, i) =>{ console.log("Item ", i, "is ", v);});

// let result = fruits.join(', ');
// console.log(result);

//-------------------------------------------------------------------
// A Quick look on (Objects)
//-------------------------------------------------------------------


// let names = {
//     1: 'Ahmed',
//     2: 'Mohammed',
//     3: "Ehab",
//     4: 'Omar',
// }
// console.log(names[1]);

// const Ehab = {
//     'Age': 40,
//     'Nationality': "Egyptian",
//     'Friends': ['Ali',"Mohammed", "Ahmed"],
// }

// console.log("Ehab's age is: ", Ehab.Age);
// console.log("Ehab's Nationality is: ", Ehab.Nationality);
// console.log("Ehab's Friends are: ", Ehab.Friends.join(', '));

//-------------------------------------------------------------------
// A Quick look on (Functions)
//-------------------------------------------------------------------

// function helloWorld() {
//     console.log("Hello world!")
// }
// helloWorld();

// function compare(a, b) {
//     if (a > b) {
//         console.log("a is bigger than b");
//     } else if (a < b) {
//         console.log("b is bigger than a");
//     } else {
//         console.log("a and b are equal");
//     }
// }
// compare(6, 6);

// function swap(a, b) {
     
//     let temp = b; // old value of b which is 10
//     b = a;
//     a = temp;
//     return [a, b];
// }

// let x = 5;
// let y = 10;
// console.log(x,y);



// let result = swap(x, y);

// let x = 5;
// let y = 10;

//  function swap () {
//     let temp = x;
//     x = y;
//     y = temp;
// }

// console.log("Before Swap ", x, y);
// swap();
// console.log("After Swap ", x, y);


// let helloWorld = () => console.log("Hello World!"); // Using Arrow Functions. Arrow functions works exactly the same as regular the only difference is the syntax
// helloWorld(); //call

// (() => console.log("Hello World!"))(); // Using an Immediately Invoked Function Expression (IIFE)

//-------------------------------------------------------------------
// A Quick look on (loops, for, for in, while, and do while)
//-------------------------------------------------------------------

// for (let i = 1; i <= 10; i++){ //outputs all numbers from 1 to 10
//     console.log(i);
// }

// for (let i = 0; i <= 10; i+=2){ // outputs all even from 1 to 10
//     console.log(i);
// }

// let i =1;
// while (i < 10) { //while loop
//     console.log(i);
//     i += 2;
// }

// let i = 1;
// do { //do while loop
//     if (i % 2 == 0) {
//         console.log(i);
//     }
//     i++
// }while(i<=10);

//  let names = {
//         1: 'Ahmed',
//         2: 'Mohammed',
//         3: "Ehab",
//         4: 'Omar',
        
//     }
// for (item in names) { // for in
//     console.log(`test ${item} ${names[item]}`);
//     // console.log("test " + item + " " +names[item] )
// }
 
// for (let i = 1; i <= 5; i++){ //nested loops
//     let row = '';
//     for (let j = 1; j <= 3; j++) {
//         row += j;
       
//     }
//     console.log(row);
// };
    
//-------------------------------------------------------------------
// Coding challenge 1
//-------------------------------------------------------------------

// Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill
//if the bill value is between 50 and 300, and if the value is different, the tip is 20 %.

// 1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip,
//calculated based on the rules above(you can check out the code from first tip calculator challenge if you need to).
// Use the function type you like the most.Test the function using a bill value of 100.
// 2. And now let's use arrays! So create an array 'bills' containing the test data below.
// 3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
// 4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

// TEST DATA: 125, 555 and 44

// HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

// GOOD LUCK 😀

//-------------------------------------------------------------------
// Coding challenge 2
//-------------------------------------------------------------------

// Let's Create Steven's tip calculator even more, this time using loops!
// 1. Create an array 'bills' containing all 10 test bill values
// 2. Create empty arrays for the tips and the totals ('tips' and 'totals')
// 3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

// TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

// HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉

// 4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
//   4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
//   4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
//   4.3. Call the function with the 'totals' array

// GOOD LUCK 😀


// Let's create a Celsius to Fahrenheit Converter
// 1. Create an array and name it Celsius and fill it with the test data
// 2. Create an empty array and name it Fahrenheit;
// 3. Create a function named Convert that converts C to F, Formula is:  C * (9/5) +32
// 4. Using forEach loop through the array "Celsius" and fill the array "Fahrenheit" with the converted values
// 5. Create a findAvg function that finds the average temperature form the array "Fahrenheit", Formula: sum / array.length
// 6. console.log the results

// Test Data [18, 20, 21, 25, 15, 13, 17]