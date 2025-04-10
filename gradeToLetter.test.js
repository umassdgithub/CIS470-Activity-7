const gradeToLetter =require("./gradeToLetter")

describe("calculateGrade", () => {
  test("should return 'A' for a score of 95", () => {
    expect(gradeToLetter(95)).toBe("A");
  });
  test("should return 'A' for a score of 91", () => {
    expect(gradeToLetter(90)).toBe("A");
  })


  test("input is not a number", () => {
    expect(gradeToLetter("not a number")).toBe("Invalid input. Please provide a number.");
  });

});

