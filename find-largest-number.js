
// Day 3: Find Largest Number

// Function 1: Find largest number using a loop
function findLargest(arr) {
    let largest = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }

    return largest;
}

// Function 2: Find largest number using reduce()
function findLargestReduce(arr) {
    return arr.reduce((largest, current) => {
        return current > largest ? current : largest;
    });
}

// Test array
const numbers = [12, 45, 7, 89, 23, 56];

// Display results
console.log("Array:", numbers);
console.log("Largest number (using loop):", findLargest(numbers));
console.log("Largest number (using reduce):", findLargestReduce(numbers));