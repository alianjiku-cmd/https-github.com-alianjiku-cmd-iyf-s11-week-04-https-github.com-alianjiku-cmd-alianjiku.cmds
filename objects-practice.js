
// Task 8.2: Objects

// ==========================
// Exercise 1: Object Basics
// ==========================

// Creating an object
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    isStudent: false,
    hobbies: ["reading", "coding", "gaming"],
    address: {
        city: "New York",
        country: "USA"
    }
};

// Accessing properties
console.log("First Name:", person.firstName);      // Dot notation
console.log("Last Name:", person["lastName"]);     // Bracket notation
console.log("City:", person.address.city);         // Nested object

// Modifying properties
person.age = 31;
person.email = "john@example.com";
delete person.isStudent;

// Display updated object
console.log("\nUpdated Person Object:");
console.log(person);


// ==========================
// Exercise 2: Object Methods
// ==========================

const calculator = {
    // Regular function
    add: function(a, b) {
        return a + b;
    },

    // Shorthand method
    subtract(a, b) {
        return a - b;
    },

    // Arrow function
    multiply: (a, b) => a * b
};

// Test calculator methods
console.log("\nCalculator Results:");
console.log("5 + 3 =", calculator.add(5, 3));
console.log("5 - 3 =", calculator.subtract(5, 3));
console.log("5 × 3 =", calculator.multiply(5, 3));


// ==========================
// Exercise 3: Object Iteration
// ==========================

const scores = {
    math: 95,
    english: 88,
    science: 92
};

// Get keys
console.log("\nObject Keys:");
console.log(Object.keys(scores));

// Get values
console.log("\nObject Values:");
console.log(Object.values(scores));

// Get entries
console.log("\nObject Entries:");
console.log(Object.entries(scores));

// Loop through the object
console.log("\nSubject Scores:");
for (const [subject, score] of Object.entries(scores)) {
    console.log(`${subject}: ${score}`);
}