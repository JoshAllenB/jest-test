// Import the caesarCipher function
const caesarCipher = require("./caesar-cipher");

// Test cases
describe("caesarCipher function", () => {
  test("encrypts a string with positive shift", () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
  });

  test("encrypts a string with negative shift", () => {
    expect(caesarCipher("Hello, World!", -3)).toBe("Ebiil, Tloia!");
  });

  test("encrypts a string with large positive shift", () => {
    expect(caesarCipher("Hello, World!", 26)).toBe("Hello, World!");
  });

  test("encrypts a string with large negative shift", () => {
    expect(caesarCipher("Hello, World!", -26)).toBe("Hello, World!");
  });

  test("encrypts a string with shift greater than 26", () => {
    expect(caesarCipher("Hello, World!", 29)).toBe("Khoor, Zruog!");
  });

  test("encrypts a string with shift less than -26", () => {
    expect(caesarCipher("Hello, World!", -29)).toBe("Ebiil, Tloia!");
  });

  test("leaves non-alphabetic characters unchanged", () => {
    expect(caesarCipher("1234!@#$", 5)).toBe("1234!@#$");
  });

  // Add more test cases as needed
});
