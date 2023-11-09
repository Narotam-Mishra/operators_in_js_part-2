// Write a JS program to check whether the number is even
// or odd using the ternary operator.

let number = Math.floor((Math.random() * 1000) + 1);

let mssg = (number%2===0) ? `${number} is an Even Number` : `${number} is an Odd Number`;

console.log(mssg);