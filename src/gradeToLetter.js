module.exports = function gradeToLetter(score, options = {}) {

  const { usePlusMinus = false, round = false } = options;

  // Type validation
  if (typeof score !== 'number' || Number.isNaN(score)) {
    return 'Invalid input. Please provide a valid number.';
  }

  // Optional rounding
  if (round) {
    score = Math.round(score);
  }

  // Range validation
  if (score < 0 || score > 100) {
    return 'Score must be between 0 and 100.';
  }

  // Base letter grade
  let grade;
  if (score >= 90) grade = 'A';
  else if (score >= 80) grade = 'B';
  else if (score >= 70) grade = 'C';
  else if (score >= 60) grade = 'D';
  else grade = 'F';

  // Optional +/- system (skip for A and F edge cases)
  if (usePlusMinus) {
    const remainder = score % 10;

    if (grade !== 'F') {
      if (remainder >= 7) {
        grade += '+';
      } else if (remainder <= 2 && grade !== 'A') {
        grade += '-';
      }
    }
  }

  return grade;
};