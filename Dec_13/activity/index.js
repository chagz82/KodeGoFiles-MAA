// Question 1
// let i = 3;

//     while (i) {
//         alert(i--);
//     }

// let i = 0;
// while (++i < 5) alert (i);
// console.log(i);

// let i = 0;
// while (i++ < 5) alert (i);
// console.log(i);

// for (let i = 0; i<5; i++) alert(i);

// for (let i = 0; i<5; ++i) alert(i);


// for (let i = 0; i < 3; i++) {
//     alert (`number ${i}!`);
// }

// let i = 0;
// while (i < 3) {
//     alert (`number ${i}!`);
//     i++;
// }


// Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask them to input again.
// The loop must ask for a number until either the visitor enters a number greater than 100 or cancels the input/enters an empty line.
// Here we can assume that the visitor only inputs numbers. There’s no need to implement a special handling for a non-numeric input this task.

let i = prompt("Enter a number that is greater than 100. ");
while (i <= 100) {

    prompt("Enter a number that is greater than 100. ");
    
    if (i > 100) alert ("The Number " + i + "is greater than 100");
  
}


// const num = prompt("Enter a number that is greater than 100.");
// const cnstant = 100;
//     if (num <= cnstant) {
//         alert ("Number " + num + " is less than 100.")
//         prompt(num);
//     }



// 6.)  Create a loop to output the following:
// 1
// 1 2
// 1 2 3
// 1 2 3 4 
// 1 2 3 4 5
// 1 2 3 4 5 6 
// 1 2 3 4 5 6 7
// 1 2 3 4 5 6 7 8




// 7.) An integer number greater than 1 is called a prime if it cannot be divided without a remainder by anything except 1 and itself.
// In other words, n > 1 is a prime if it can’t be evenly divided by anything except 1 and n.
// For example, 5 is a prime, because it cannot be divided without a remainder by 2, 3, and 4.
// Write the code which outputs prime numbers in the interval from 2 to n.
// For n = 10 the result will be 2,3,5,7.
// P.S. The code should work for any n, not be hard-tuned for any fixed value.








// 8.)  Create a function that takes an array as a parameter and returns a reversed array.
// Example input: ['a', 'b', 'c', 'd'];
// Example output:  ['d', 'c', 'b', 'a'];

// const numbers = [10, 20, 30, 40, 50];
//     console.log(numbers.reverse());

const reverseArray = [10, 20, 30, 40, 50];

    console.log (reverseArray.reverse())



    // Fizz Buzz

    // Given an integer n, return a string array answer  where:
    
    // answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
    // answer[i] == "Fizz" if i is divisible by 3.
    // answer[i] == "Buzz" if i is divisible by 5.
    // answer[i] == i (as a string) if none of the above conditions are true.
    let n = prompt("Enter Number");
    let i = 1;
    const fizzBuzz = function(n) {
        
        for (i/3 = 0; i<=n; i++); 
        for (i/3 = 0; i<=n; i++);
    }