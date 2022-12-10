//Function declaration
function add(num1, num2) {
    return num1 + num2;
}

// () = invoker
const sum1 = add(10, 5);
    console.log(sum1);
const sum2 = add(50, 99);
    console.log(sum2);

//Function expression
const subtract = function(num1, num2){
    return num1 - num2;
}

const diff1 = subtract(80, 50);
    console.log(diff1);

const diff2 = subtract;
    console.log(diff2);


//Arrow function
const multiply = (num1, num2) => num1 * num2;
const prod1 = multiply(5, 2);
    console.log(prod1);

const greetme = () => alert("Hi there!");
greetme();
