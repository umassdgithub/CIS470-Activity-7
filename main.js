const calculateBMI = require('./bmi.js');
const gradeToLetter = require('./gradeToLetter.js');
// Usage example
const weightInPounds = 150;
const heightInFeet = 5;
const heightInInches = 9;

const result = calculateBMI(weightInPounds, heightInFeet, heightInInches);
console.log("BMI:", result);
console.log("BMI:",    calculateBMI(0, 0, 0))


const result2 = gradeToLetter("text");
console.log(result2);