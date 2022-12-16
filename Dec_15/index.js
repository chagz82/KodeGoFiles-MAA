// Modern Javascript features

// Default parameters
// old way
const add = (num1, num2) => {
    // ternary operator
    // condition ? true value : false value
    num2 = typeof num2 !== 'undefined' ? num2 : 0;
    return num1 + num2;
}

// console.log ( add(15));

// new way
const multiply = (num1, num2 = 1) => {
    return num1 * num2;
}

console.log(multiply (99));
console.log( multiply(99, 2));

// spread syntax
const num = [5, 4, 3, 2, 1]
Math.min(...num );
// the same with expression with ====>  Math.min(5, 4, 3, 2, 1)
console.log(num);

// in array literal, creating an array using exiting array
const num1 = [1, 2, 3];
const num2 = [4, 5, 6];

const arr1 = [...num1, ...num2];
// [1, 2, 3, 4, 5, 6]
const arr2 = ["a", "b", ...num2];
// ["a", "b", 4, 5, 6]
const arr3 = [...num1, ...num2, 7, 8, 9];
// [1, 2, 3, 4, 5, 6, 7, 8, 9]


// in object literal
// copy property from one object to another
const feline = { family: "Felidae", legs: 4};
const canine = {family: "Canidae", hasTail: true};

const dog = {...canine, ispet: true};
// {family:  "Canidae", hasTail: true, isPet: true}

const catdog = {...canine, feline};

console.log(dog);
console.log(catdog);



// Rest Parameters
// get all remaining arguments into an array
const getSum = (message, ...numbers) => {
    let sum = 0;
    for (let n of numbers) {
        sum += n;
    }
    console.log(message);
    return sum;
}
console.log( getSum(1,2)); // 3
console.log( getSum(1,2,3,4,5)); // 15
console.log(getSum("Values are: ", 1,2,3,4,5));


// Destructure/ Desstructuring

// Array Destructuring
const highestMMR = [prompt("Enter a name."), prompt("Enter Second name"), "Raymar"];

const [gold, sivel, bronze] = highestMMR;
console.log (gold, sivel, bronze)

const [highest, ...everyoneelse] = highestMMR;
console.log(highest);
console.log(everyoneelse);

const person = {
    firstName:  "Bruce",
    lastName:   "Wayne",
    city:       "Gotham",
    title:      "batman"
}
const {firstName, lastName, city, title} = person;
// console.log(firstName, lastName);
// console.log(city);
// console.log(title);


// Parameter Destructuring
const getFullName = ({firstName, lastName}) => {
    return `${firstName} ${lastName}`
}
console.log(getFullName(person));
