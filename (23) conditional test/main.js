"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let favDish = "Biryani";
console.log('\n5 tests indicating True answers:\n');
// Test 1: (equality comparision)
console.log("Is favDish == 'Biryani'? I predicted true");
console.log(favDish == "Biryani");
// Test 2:  (strict equality comparision)
console.log("Is favDish === 'Biryani'? I predicted true");
console.log(favDish === "Biryani");
// Test 3:
console.log("Is favDish !== 'Qorma'? I predicted true");
console.log(favDish !== 'Qorma');
// Test 4:
console.log("Is the variable.length > 5? I predicted true");
console.log(favDish.length > 5);
// Test 5:
console.log("Does favDish start with 'B'? I predicted true");
console.log(favDish.startsWith('B'));
console.log("\n5 tests indicating false answers:\n");
// Test 6:
console.log("Is favDish == 'Koftey'? I predicted false");
console.log(favDish == "Koftey");
// Test 7:
console.log("Is favDish in uppercase? I predicted false");
console.log(favDish.toUpperCase() == favDish);
// Test 8:
console.log("Is favDish.length > 7? I predicted false");
console.log(favDish.length > 7);
// Test 9:
console.log("Is favDish == 'biryani'? I predicted false");
console.log(favDish == 'biryani');
// Test 10:
console.log("Is favDish ends with 'm'? I predicted false");
console.log(favDish.endsWith('m'));
