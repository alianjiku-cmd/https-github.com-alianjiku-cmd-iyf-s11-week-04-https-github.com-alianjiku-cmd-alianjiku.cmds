 // Setup & Variables//
// ===============================
// Variable Declarations
// ===============================

// Basic variables
let name = "Alice Murungaruh";
let age = 30;
const birthYear = 1996;

// ===============================
// typeof Operator
// ===============================

console.log(typeof name);       // string
console.log(typeof age);        // number
console.log(typeof true);       // boolean

// ===============================
// let vs const
// ===============================

let score = 100;
score = 150;  // Works!

const PI = 3.14159;
// PI = 3;  // Error! const cannot be reassigned

// Display score and PI
console.log("Score:", score);
console.log("PI:", PI);

// ===============================
// Exercise: Variable Practice
// ===============================

// Your name (string)
let studentName = "Alice Murungaruh";

// Your age (number)
let studentAge = 25;

// Whether you're a student (boolean)
let isStudent = true;

// Favorite colors (array)
let favoriteColors = ["Blue", "Black", "White"];

// Today's date
let today = new Date();

// variable with a descriptive message
console.log("My name is:", studentName);
console.log("My age is:", studentAge);
console.log("Am I a student?", isStudent);
console.log("My favorite colors are:", favoriteColors);
console.log("Today's date is:", today);