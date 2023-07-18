/* eslint-disable quotes */

const stringLength = require("./functionsTest/string.js");
const reverseString = require("./functionsTest/reverse.js");
const capitalize = require("./functionsTest/capitalize.js");
const Calculator = require("./functionsTest/calculator.js");

describe("StringLength", () => {
  it("should return the length of string", () => {
    expect(stringLength("hello")).toBe(5);
  });
});
describe("ReverseString", () => {
  it("should return the reverse of string", () => {
    expect(reverseString("hi")).toBe("ih");
  });
});

describe("Capitalize", () => {
  it("Should return the uppercase form of the first letter of the string", () => {
    expect(capitalize("hi")).toBe("Hi");
  });
});

describe("Add", () => {
  it("should return the sum of two number", () => {
    const calculator = new Calculator();
    expect(calculator.add(4, 2)).toBe(6);
    expect(calculator.add(7, 2)).toBe(9);
    expect(calculator.add(14, 2)).toBe(16);
  });
});

describe("Subtract", () => {
  it("should return the subtract of two number", () => {
    const calculator = new Calculator();
    expect(calculator.subtract(4, 2)).toBe(2);
    expect(calculator.subtract(6, 2)).toBe(4);
    expect(calculator.subtract(7, 1)).toBe(6);
  });
});

describe("Multiply", () => {
  it("should return the multiply of two number", () => {
    const calculator = new Calculator();
    expect(calculator.multiply(4, 2)).toBe(8);
    expect(calculator.multiply(3, 2)).toBe(6);
    expect(calculator.multiply(5, 6)).toBe(30);
  });
});

describe("Divide", () => {
  it("should return the divide of two number", () => {
    const calculator = new Calculator();
    expect(calculator.divide(4, 2)).toBe(2);
    expect(calculator.divide(8, 2)).toBe(4);
    expect(calculator.divide(16, 4)).toBe(4);
  });
});
