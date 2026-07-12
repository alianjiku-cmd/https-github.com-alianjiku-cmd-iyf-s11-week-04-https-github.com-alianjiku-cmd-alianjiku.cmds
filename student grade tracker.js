
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const students = [];

function showMenu() {
    console.log('\n--- Student Grade Tracker ---');
    console.log('1. Add Student and Grade');
    console.log('2. View All Grades');
    console.log('3. Calculate Class Average');
    console.log('4. Exit');
    rl.question('Choose an option (1-4): ', handleMenu);
}

function handleMenu(choice) {
    switch (choice.trim()) {
        case '1':
            addStudent();
            break;
        case '2':
            viewGrades();
            break;
        case '3':
            calculateAverage();
            break;
        case '4':
            console.log('Goodbye!');
            rl.close();
            break;
        default:
            console.log('Invalid option. Please try again.');
            showMenu();
    }
}

function addStudent() {
    rl.question('Enter student name: ', (name) => {
        rl.question('Enter grade (0-100): ', (gradeInput) => {
            const grade = parseFloat(gradeInput);
            if (isNaN(grade) || grade < 0 || grade > 100) {
                console.log('Invalid grade. Please enter a number between 0 and 100.');
            } else {
                students.push({ name: name.trim(), grade: grade });
                console.log(`Added ${name} with a grade of ${grade}.`);
            }
            showMenu();
        });
    });
}

function viewGrades() {
    if (students.length === 0) {
        console.log('No student data available.');
    } else {
        console.log('\n--- Student List ---');
        students.forEach(s => console.log(`${s.name}: ${s.grade}`));
    }
    showMenu();
}

function calculateAverage() {
    if (students.length === 0) {
        console.log('No grades available to calculate average.');
    } else {
        const total = students.reduce((sum, s) => sum + s.grade, 0);
        const average = total / students.length;
        console.log(`\nClass Average: ${average.toFixed(2)}`);
    }
    showMenu();
}

// Start the application
showMenu();
