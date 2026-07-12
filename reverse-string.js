
// ============================
// Method 1: Using a Loop
// ============================

function reverseStringLoop(str) {
    let reversed = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }

    return reversed;
}

console.log("Loop Method:", reverseStringLoop("hello"));

// ============================
// Method 2: Built-in Methods
// ============================

function reverseStringBuiltIn(str) {
    return str.split("").reverse().join("");
}

console.log("Built-in Method:", reverseStringBuiltIn("hello"));