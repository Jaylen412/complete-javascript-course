console.log('hello world');
let name = 'Jaylen';
console.log(`hello ${name} welcome to JS`);
/* 
JS Primitive types:
    -Number
    -String
    -Boolean
    -Undefined
    -Null
    -BigInt
    -Symbol
*/

// challenge #1: caclulate BMI
const caclulateBMI = (mass, height) => {
  return Math.round(mass / (height * height));
};
// Mark
let massMark = 78;
let heightMark = 1.69;
const markBMI = caclulateBMI(massMark, heightMark);
// John
let massJohn = 92;
let heightJohn = 1.95;
const johnBMI = caclulateBMI(massJohn, heightJohn);

console.log(markBMI > johnBMI ? 'Mark BMI is higher' : 'John BMI is higher');

// challenge #2:
console.log(
  `${markBMI > johnBMI ? "Mark's" : "John's"} BMI ${
    markBMI > johnBMI ? '(' + markBMI + ')' : '(' + johnBMI + ')'
  } is higher than ${markBMI < johnBMI ? "Mark's" : "John's"} BMI ${
    markBMI < johnBMI ? '(' + markBMI + ')' : '(' + johnBMI + ')'
  }`
);
