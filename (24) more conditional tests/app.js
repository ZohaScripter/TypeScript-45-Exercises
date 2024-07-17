"use strict";
let str1 = "cupcake"; //str = string
let str2 = "muffin";
let num1 = 2;
let num2 = 4;
let array = [1, 2, 3, 4, 5];
// Tests for equality and inequality with strings:
console.log("Tests for equality and inequality with strings:");
console.log(str1 === "cupcake");
console.log(str1 === "muffin");
// Tests using lower case function:
console.log("\nTests using lower case function:");
console.log(str1.toLowerCase() === "cupcake");
console.log(str1.toLowerCase() !== "cupcake");
// Numerical Tests:
console.log("\nNumerical Tests:");
console.log(num1 < num2);
console.log(num1 > num2);
console.log(num1 === 2);
console.log(num2 !== 4);
// Tests using "and" & "or" operators (logical operators):
console.log("\nTests using 'and' & 'or' operators");
console.log((num1 > 1) && (num2 < 5));
console.log((num1 < 2) || (num2 > 6));
// Test whether an item is in an array:
console.log("\nTest whether an item is in an array:");
console.log(array.includes(2));
console.log(array.includes(8));
// Test whether an item is not in an array:
console.log("\nTest whether an item is not in an array:");
console.log(!array.includes(7));
console.log(!array.includes(3));
