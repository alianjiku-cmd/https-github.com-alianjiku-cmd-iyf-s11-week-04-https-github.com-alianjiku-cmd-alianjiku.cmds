
// Day 5: Palindrome Checker

// Function to check if a string is a palindrome
function isPalindrome(str) {
    // Convert to lowercase and remove spaces
    const cleanedString = str.toLowerCase().replace(/\s+/g, "");

    // Reverse the cleaned string
    const reversedString = cleanedString.split("").reverse().join("");

    // Compare the original and reversed strings
    return cleanedString === reversedString;
}

// Test cases
console.log('"racecar" ->', isPalindrome("racecar"));
console.log('"hello" ->', isPalindrome("hello"));
console.log('"A man a plan a canal Panama" ->', isPalindrome("A man a plan a canal Panama"));