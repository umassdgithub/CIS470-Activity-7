module.exports = function gradeToLetter(score) {

  if (typeof score !== 'number') {
    return 'Invalid input. Please provide a number.';
  }

  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}