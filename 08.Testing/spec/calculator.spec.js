const { add } = require('../calculator');

describe("Calculator", () => {
  it("should add two numbers", () => {
    expect(add(2, 3)).toBe(5);
  });
});
