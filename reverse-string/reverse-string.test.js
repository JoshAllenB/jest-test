// Import the function to be tested
const reverseString = require("./reverse-string");

// Test cases
describe("reverseString function", () => {
  test("reverses a simple string", () => {
    expect(reverseString("hello")).toBe("olleh");
  });

  test("reverses a string with special characters", () => {
    expect(reverseString("hello! How are you?")).toBe("?uoy era woH !olleh");
  });

  test("reverses an empty string", () => {
    expect(reverseString("")).toBe("");
  });

  // Add more test cases as needed
});
