
// Function declaration
function greet(name) {
    return `Hello, ${name}!`;
}

// Function expression
const add = function(a, b) {
    return a + b;
};

// Arrow function
const multiply = (a, b) => a * b;

// Arrow function with body
const divide = (a, b) => {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
};

// Exercise Functions
function calculateArea(width, height) {
    return width * height;
}

function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function isEven(number) {
    return number % 2 === 0;
}

function getInitials(fullName) {
    let names = fullName.split(" ");
    return names[0][0] + names[1][0];
}

function reverseString(str) {
    return str.split("").reverse().join("");
}

// Default Parameters
function greetUser(name = "Guest", greeting = "Hello") {
    return `${greeting}, ${name}!`;
}

function calculateTip(bill, tipPercent = 15) {
    return bill * tipPercent / 100;
}

// Test the functions
console.log(greet("Alice"));
console.log(add(10, 5));
console.log(multiply(4, 5));
console.log(divide(20, 5));
console.log(calculateArea(8, 5));
console.log(celsiusToFahrenheit(25));
console.log(isEven(8));
console.log(getInitials("Alice Murungaruh"));
console.log(reverseString("hello"));
console.log(greetUser());
console.log(greetUser("Alice"));
console.log(greetUser("Bob", "Hi"));
console.log(calculateTip(1000));
console.log(calculateTip(1000, 20));