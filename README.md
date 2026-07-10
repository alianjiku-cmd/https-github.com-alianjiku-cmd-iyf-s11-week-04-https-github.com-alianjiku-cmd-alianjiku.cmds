# https-github.com-alianjiku-cmd-iyf-s11-week-04-https-github.com-alianjiku-cmd-alianjiku.cmds
JavaScript Basics &amp; Arrays, Objects &amp; Data Manipulation

*Task 7.1: JavaScript Setup*
**What main.js code demonstrates**
. A string variable (name)
. A number variable (age)
. A boolean variable (isStudent)
. An array variable (favoriteColors)
. A Date object (today)
. The typeof operator
. The difference between let and const
. console.log() with descriptive messages & Variables


*Task 7.2: Data Types & Operators*
**After completing this exercise,I have practiced the following:**

- Variables (let)
- Numbers
- Addition (+)
- Subtraction (-)
  -Multiplication (*)
- Division (/)
  -Modulus (%)
- Exponentiation (**)
-Increment (++)
-Decrement (--)


*Task 7.3: Functions*
A function is a reusable piece of code.
 **My expected Output**
1. Loop Method: 
2. Build-in-methode

*Task 7.4: Control Flow*
*Task 8.1: Arrays*

Exercise 1: Array Basics
Exercise 2: Array Methods

*Task 8.2: Objects* 
Exercise 1: Object Basics
Exercise 2: Object Methods
Exercise 3: Object Iteration

*Task 8.3: Array of Objects*
# Student Grade Tracker

## Overview

This project is a JavaScript practice exercise that demonstrates how to work with arrays of objects and object methods. It includes solutions for common array operations and a mini-project that manages student grades.

## Features

### Array of Objects Exercises

The program performs the following tasks:

* Retrieves all student names using the `map()` method.
* Filters students with grades above 80 using `filter()`.
* Finds a specific student by name using `find()`.
* Calculates the average grade using `reduce()`.
* Displays only Computer Science (CS) students.
* Sorts students from the highest grade to the lowest.
* Checks whether any student has a grade above 90 using `some()`.
* Checks whether all students have passing grades using `every()`.

### Student Grade Tracker

The `gradeTracker` object provides several methods for managing student records:

* **addStudent()** – Adds a new student and their subject grades.
* **getStudent()** – Searches for a student by name.
* **getStudentAverage()** – Calculates the average score for a student.
* **getSubjectAverage()** – Calculates the class average for a specific subject.
* **getTopStudent()** – Finds the student with the highest average score.
* **getStrugglingStudents()** – Lists students whose average is below 70.
* **getLetterGrade()** – Converts a numerical score into a letter grade (A–F).
* **generateReportCard()** – Creates a formatted report card showing grades, average, and letter grade.

## JavaScript Concepts Used

This project demonstrates the use of:

* Arrays
* Objects
* Nested objects
* Object methods
* Array methods (`map`, `filter`, `find`, `reduce`, `sort`, `some`, `every`)
* `Object.values()`
* Loops
* Functions
* Conditional statements
* Template literals

## How to Run

1. Save the file as `student-grade-tracker.js`.
2. Open the terminal.
3. Navigate to the project folder.
4. Run the program using:

```bash
node student-grade-tracker.js
```

## Expected Output

The program displays:

* Student names
* High-achieving students
* Average class grade
* Computer Science majors
* Sorted student records
* Top-performing student
* Students needing academic support
* A formatted report card showing subject grades, average score, and letter grade.



**Daily Challenges**
**Day 1: FizzBuzz In**
An array stores many values. An array can also store different types of data 
Example: 
const mixed = ["hello", 42, true, null];



**Day 2: Reverse a String **
# Day 2: Reverse a String

## Overview

This project demonstrates two different ways of reversing a string using JavaScript.

The goal of the exercise is to understand how strings can be manipulated using loops and built-in array methods.

## Methods Used

### 1. Built-in Methods

This approach converts the string into an array using `split("")`, reverses the array using `reverse()`, and joins it back into a string using `join("")`.

Example:

```javascript
"hello"
.split("")
.reverse()
.join("")
```

Output:

```text
olleh
```

### 2. Loop

This approach starts from the last character of the string and moves backwards, adding one character at a time to create a new reversed string.

## JavaScript Concepts Practiced

* Functions
* Strings
* Arrays
* Loops
* `split()`
* `reverse()`
* `join()`
* `console.log()`

## How to Run

1. Open the terminal.
2. Navigate to the project folder.
3. Run:

```bash
node reverse-string.js
```

## Example Output

```text
Original: hello
Built-in: olleh
Loop: olleh
```

## What I Learned

Through this exercise, I learned that there are multiple ways to solve the same problem in JavaScript. The built-in method is shorter and easier to read, while the loop method helped me understand how strings can be processed one character at a time.



**Day 3: Find Largest Number**

The exercise is testing whether I can find the largest number in an array without using Math.max().l solveD it in two ways:
- *Using a loop*
- *Using reduce()*

*Day 4: Remove Duplicates*
I solved it in two ways:

1.  Using Set
2. Using filter()

*How it works*
.Set automatically removes duplicate values because a Set only stores unique items.
.filter() checks each element and keeps only its first occurrence using indexOf().
   

Day 5: Palindrome Checker 

**How it works**
.toLowerCase()- converts all letters to lowercase so "RaceCar" becomes "racecar".
.replace(/\s+/g, "") -removes all spaces from the string.
.split("")- turns the string into an array of characters.
.reverse()- reverses the array.
.join("")- joins the characters back into a string.
.The function compares the cleaned string with its reversed version. If they are the same, it returns true; otherwise, it returns false.

This solution satisfies all the assignment requirements:

1. Checks whether a string is a palindrome.
- Ignores uppercase and lowercase differences.
- Ignores spaces.
- Includes the required test cases.


Expected Output
"racecar" -> true
"hello" -> false
"A man a plan a canal Panama" -> true

