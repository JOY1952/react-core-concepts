"use strict";
let age = 50;
age = 150;
let club = 'Real Madrid';
const isFamous = false;
let famous;
console.log(club);
function add(num1, num2) {
    return num1 + num2;
}
add(3, 76);
add('adama', 'kobir');
function fullName(firstName, leastName) {
    return firstName + ' ' + leastName;
}
const user = fullName('Martin', 'Rock');
function doubleItAndConsole(num) {
    const result = num * 2;
    console.log(result);
}
const output = doubleItAndConsole(10);
console.log('output', output);
const multiply = (x, y) => x * y;
console.log(multiply(25, 6));
