// Question24: More conditional tests;
// Equality with strings;
let string = 'Apple';
console.log("Testing equality with string:");
console.log(string === 'Apple'); // true
console.log(string === 'apple'); // false
// Using the lower case function ;
console.log("Testing the lower case:");
console.log("Apple".toLowerCase() == "apple"); //true
// Numerical tests;
console.log("Numericaltests:");
console.log(10 > 5); //true
console.log(2 < 1); //false
// Tests using "and" nd "or"operators
console.log("Tests with 'and' nd 'or':");
console.log(true && false); // false
console.log(true, false); // true
// Test whether an aitam is in a array 
let fruits = ["apple", "orange", "cherry"];
console.log("Is 'apple'in fruits?");
console.log(fruits.includes("apple")); //true
// Test whether an item is not in a array
console.log("Is 'mango' not in fruits?");
console.log(!fruits.includes("mango")); // true
export {};
