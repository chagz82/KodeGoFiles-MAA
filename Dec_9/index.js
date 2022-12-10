//variables
//initialization
let age = 25;
const name = "Jose";

age =26;
//Display function
console.log (age);
//alert ("Helo World");
//prompt("Enter a number");

//Data Types
const firstName = "Mark"; //string data type, ("", '')string literal
// const message = 'This
// is my
// message'; //string,  (``) backtick, Template literal
// const greeting = `Hello ${firstName}`; //${expression}, only for Template literal
// const favorateNumber = 7; //Number Data type
// const average = 99.99; // Number Data type
// const isHappy = true; //Boolean data type
// const isHungry=true; //Boolean data type
// const value=null; //null
// const undef=undefined; //Undefined

// //Operators
//Assignment operator =
const num1 = 15;
const num2 = 5

//String + (string or number) = string
//concatenation, concatenate
// Type coercion
console.log ("Number: 1 " + num1);
// \n = new line
console.log("This \n is \n another \n line");

//Math operators
// console.log ("Addition: " + num1 + num2);
console.log('Addition: ${num1 + num2}'); //Addtion Operator
console.log('Subtraction: ${num1 - num2}'); //Subtraction operator
console.log('Multiplication: ${num1 * num2}'); //Multipication operator
console.log('Division: ${num1 / num2}'); //Division operator
console.log('Modulo: ${num1 % num2}'); //Remainder operator

let count=10;
// Increment ++
console.log(count++); //Postfix incremnt
console.log(count)
console.log(++count); //prefix increment
// Decrement --
console.log(count--); //Postfix decrement
console.log(--count); //prefix decrement

// More assignement operators
// let sum=0;
// sum += 9; //equivalen to "sum = sum + 9" | addition assignment
// console.log(sum)

// let diff=0;
// diff -= 9; //equivalen to "diff = diff - 9" | subtraction assignment
// console.log(diff)

// let product=0;
// product *= 9; //equivalen to "product = product - 9" | Multipication assignment
// console.log(product)

// let quotient=0;
// quotient /= 9; //equivalen to "quotient = quotient / 9" | Multipication assignment
// console.log(quotient)

// let remainder=0;
// remainder /= 9; //equivalen to "remainder = remainder % 9" | Modulo assignment
// console.log(remainder)


//Conditional Statement
let number = 18;
let description;

if (number>20) {
    description = "Number is greater than 20.";
}

else if (number === 19) {
    description = "Number is 19.";
}

else {
    description = "Number is below 19 and 20";
}

console.log(description)


//Truthy or Falsy VAlues
//Any non-zero is always 'true'
if (number) {
    console.log(number);
}

const sample="";
if (sample) {
    console.log(sample);
}

//Loops | While loop
let num=0;
while (num<5){
  
    console.log("WHILE Loop " + num);
    num++;
}

//Do...While Loop
num=0;
do{
    console.log("DO...WHILE Loop " + num++);
}while(num<5);


//For loop
for (let i=0; i<5; i++){
    // console.log("FOR Loop " + i)
        if (i===3){
            console.log("The Number \nis 3.");
    }
}

let score=5;
console.log(score+4);

let bankBalance = 100;console.log(bankBalance);


let div=10;
let remainder=div%2;
    if (remainder===0){
        console.log(`${div} is even`);
}


for (i=0; i<10; i+2){
    console.log(i+=2);
}