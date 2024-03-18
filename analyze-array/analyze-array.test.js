// Import the analyzeArray function
const analyzeArray = require("./analyze-array");

// Test cases
describe("analyzeArray function", () => {
  test("returns correct analysis for an array", () => {
    const result = analyzeArray([1, 8, 3, 4, 2, 6]);
    expect(result).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    });
  });

  // Add more test cases as needed
});
