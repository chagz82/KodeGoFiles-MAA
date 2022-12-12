// Array
const fruits = ["orange", "apple", "jackfruit", "grapes"];
console.log (fruits);


let ans = prompt("Select number btwenn 0-3 to get Fruit");

console.log (fruits[ans]);
    if (ans > 3) {
        alert("Value entered is invalid");
    }

const prutas = new Array();
prutas[0] = "DragonFruit";
prutas[1] = "Guava";    
prutas[2] = "Papaya";
prutas[3] = "Pears";

// add item at the end of an array
prutas.push("Pomelo", "Mango")

console.log(prutas);

const score = [10, 20, 30, 40, 50];

for (let i = 0; i < score.length ; i++) {
    console.log(score[i]);
}


const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum=0;

// callback functions
number.forEach((number) => console.log(number))
number.forEach((number)=>{sum += number});
console.log("Answer = " + sum);