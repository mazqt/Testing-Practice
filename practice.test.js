const {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyze,
} = require("./practice");

test("capitalises hello", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("reverses hello", () => {
  expect(reverseString("hello")).toBe("olleh");
});

test("calculator add", () => {
  expect(calculator.add(5, 2)).toBe(7);
});

test("calculator subtract", () => {
  expect(calculator.subtract(5, 2)).toBe(3);
});

test("calculator multiply", () => {
  expect(calculator.multiply(5, 2)).toBe(10);
});

test("calculator divide", () => {
  expect(calculator.divide(5, 2)).toBe(2.5);
});

test("caesar cipher all lower no punctuation, one step", () => {
  expect(caesarCipher("abcd", 1)).toBe("bcde");
});

test("caesar cipher all lower wrap around", () => {
  expect(caesarCipher("zzz", 1)).toBe("aaa");
});

test("caesar cipher mixed case", () => {
  expect(caesarCipher("aBcD", 1)).toBe("bCdE");
});

test("caesar cipher punctuation", () => {
  expect(caesarCipher("ab.cd", 1)).toBe("bc.de");
});

test("analyze average", () => {
  expect(analyze([1, 2, 3, 4]).average).toBe(2.5);
});

test("analyze min", () => {
  expect(analyze([1, 2, 3, 4]).min).toBe(1);
});

test("analyze max", () => {
  expect(analyze([1, 2, 3, 4]).max).toBe(4);
});

test("analyze length", () => {
  expect(analyze([1, 2, 3, 4]).length).toBe(4);
});
