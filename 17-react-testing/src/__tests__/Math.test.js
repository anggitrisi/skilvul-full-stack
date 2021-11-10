import { Add, Substract, Multiplication } from "../Math";

describe("test Math", () => {
  test("Return sum of two arguments, (5,2) return 7", () => {
    // Arrange
    const num1 = 13;
    const num2 = 3;
    const expectedSum = 16;
    // Act
    const actualSum = Add(num1, num2);
    // Assert
    expect(actualSum).toBe(expectedSum);
  });

  test("Return substraction of a - b", () => {
    // Arrange
    const num1 = 13;
    const num2 = 3;
    const expectedSub = 10;
    // Act
    const actualSub = Substract(num1, num2);
    // Assert
    expect(actualSub).toBe(expectedSub);
  });

  test("Return multiplication of two arguments", () => {
    // Arrange
    const num1 = 13;
    const num2 = 3;
    const expectedMult = 39;
    // Act
    const actualMult = Multiplication(num1, num2);
    // Assert
    expect(actualMult).toBe(expectedMult);
  });
});
