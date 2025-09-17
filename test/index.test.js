test("adds two numbers correctly", () => {
  const { sumNumbers } = require("../index");
  expect(sumNumbers(2, 3)).toBe(5);
});
