import Calculator from "./calculator.js";

describe("Calculator", () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  test("should add two numbers correctly", () => {
    const result = calculator.add(2, 3);
    expect(result).toBe(5);
  });
  
test('should subtract two numbers correctly', () => {
  const result = calculator.subtract(5, 3);
  expect(result).toBe(2);
});

test('should handle negative results', () => {
  const result = calculator.subtract(3, 5);
  expect(result).toBe(-2);
});

test('should multiply two numbers correctly', () => {
  const result = calculator.multiply(2, 3);
  expect(result).toBe(6);
});

test('should divide two numbers correctly', () => {
  const result = calculator.divide(6, 3);
  expect(result).toBe(2);
});

test('should throw error when dividing by zero', () => { expect(() => calculator.divide(5, 0)).toThrow('Cannot divide by zero'); });
});
