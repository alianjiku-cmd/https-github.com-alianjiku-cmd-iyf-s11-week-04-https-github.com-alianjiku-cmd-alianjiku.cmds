
// Day 4: Remove Duplicates

// Method 1: Using Set
function removeDuplicatesSet(arr) {
    return [...new Set(arr)];
}

// Method 2: Using filter()
function removeDuplicatesFilter(arr) {
    return arr.filter((item, index) => {
        return arr.indexOf(item) === index;
    });
}

// Test array
const numbers = [1, 2, 2, 3, 4, 4, 5];

// Display results
console.log("Original Array:", numbers);

console.log("Using Set:");
console.log(removeDuplicatesSet(numbers));

console.log("Using filter:");
console.log(removeDuplicatesFilter(numbers));