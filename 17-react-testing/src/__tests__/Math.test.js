import { Add, Substract, Multiplication } from "../Math";

describe("test Math", () => {
  test("Return sum of two arguments, (5,2) return 7", () => {
    // Arrange
    const num1 = 5;
    const num2 = 2;
    const expectedSum = 7;
    // Act
    const actualSum = Add(num1, num2);
    // Assert
    expect(actualSum).toBe(expectedSum);
  });

  test("Return substraction of a - b", () => {
    // Arrange
    const num1 = 5;
    const num2 = 2;
    const expectedSub = 3;
    // Act
    const actualSub = Substract(num1, num2);
    // Assert
    expect(actualSub).toBe(expectedSub);
  });

  test("Return multiplication of two arguments", () => {
    // Arrange
    const num1 = 5;
    const num2 = 2;
    const expectedMult = 10;
    // Act
    const actualMult = Multiplication(num1, num2);
    // Assert
    expect(actualMult).toBe(expectedMult);
  });
});
