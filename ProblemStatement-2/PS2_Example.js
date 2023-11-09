let x = 5, y = 10;

let result = (x++, y++, x + y);

// In this case, x is incremented by 1 (x++), y is incremented by 1 (y++), and then the value of (x + y) is returned.

console.log(result); // Output: 17
console.log(x);      // Output: 6
console.log(y);      // Output: 11

// In this example, the expression (x++, y++, x + y) uses the comma operator to increment x and y by 1 each (using the x++ and y++ expressions), and then returns the value of x + y.