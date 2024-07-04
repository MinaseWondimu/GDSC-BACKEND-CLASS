function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error: Division by zero";
    }
    return a / b;
}
function calculateBMI(weight, height) {

    height = height / 100;
    let bmi = weight / (height * height);
    return bmi.toFixed(2);
}
function showMenu() {
    console.log("Personalized Calculator");
    console.log("1. Addition");
    console.log("2. Subtraction");
    console.log("3. Multiplication");
    console.log("4. Division");
    console.log("5. BMI Calculator");
    console.log("6. Exit");
}

function calculator() {
    const readline = require('readline-sync');

    let running = true;

    while (running) {
        showMenu();
        let choice = readline.question("Choose an option: ");
        
        switch (choice) {
            case '1':
                let addA = parseFloat(readline.question("Enter first number: "));
                let addB = parseFloat(readline.question("Enter second number: "));
                console.log(`Result: ${add(addA, addB)}`);
                break;
            case '2':
                let subA = parseFloat(readline.question("Enter first number: "));
                let subB = parseFloat(readline.question("Enter second number: "));
                console.log(`Result: ${subtract(subA, subB)}`);
                break;
            case '3':
                let mulA = parseFloat(readline.question("Enter first number: "));
                let mulB = parseFloat(readline.question("Enter second number: "));
                console.log(`Result: ${multiply(mulA, mulB)}`);
                break;
            case '4':
                let divA = parseFloat(readline.question("Enter first number: "));
                let divB = parseFloat(readline.question("Enter second number: "));
                console.log(`Result: ${divide(divA, divB)}`);
                break;
            case '5':
                let weight = parseFloat(readline.question("Enter weight in kg: "));
                let height = parseFloat(readline.question("Enter height in cm: "));
                console.log(`BMI: ${calculateBMI(weight, height)}`);
                break;
            case '6':
                running = false;
                console.log("Exiting...");
                break;
            default:
                console.log("Invalid choice, please try again.");
                break;
        }
    }
}
calculator();
