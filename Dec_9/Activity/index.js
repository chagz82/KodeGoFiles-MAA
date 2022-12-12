//Create a html file
// Create a simple calculator
// Use prompt, alert, variables, conditionals, operations and functions
// Using prompt, enter 2 numbers assigned in 2 variables
// Enter the operator ( +, *, -, /), based on the input, compute the two numbers.
// Display the result.

let num1 = parseInt (prompt("Enter first number"));
let num2 = parseInt (prompt("Enter second number"));
let operator = prompt("Enter operation");

if (operator === "+" ) {
    const add = (num1, num2) => num1 + num2
    const answer = add(num1, num2);
    alert ("Answer = " + answer);
}

else if (operator === "-" ) {
    const subtract = (num1, num2) => num1 - num2
    const answer = subtract(num1, num2);
    alert ("Answer = " + answer);
}

else if (operator === "*" ) {
    const multiply = (num1, num2) => num1 * num2
    const answer = multiply(num1, num2);
    alert ("Answer = " + answer);
}

else if (operator === "/" ) {
    const divide = (num1, num2) => num1 / num2
    const answer = divide(num1, num2);
    alert ("Answer = " + answer);
}

