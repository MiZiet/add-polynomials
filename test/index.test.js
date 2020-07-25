const addPolynomials = require("../lib/index");
const assert = require("chai").assert;

describe("Function testing", () => {
  it("should output an array", () => {
    const OUTPUT = addPolynomials([], []);
    assert.isArray(OUTPUT);
  });

  it("should accept frist parameter as empty array", () => {
    const INPUT1 = [
      [1.2, -1],
      [2, 3],
    ];
    const INPUT2 = [];
    const OUTPUT = [
      [1.2, -1],
      [2, 3],
    ];
    assert.deepEqual(addPolynomials(INPUT1, INPUT2), OUTPUT);
  });

  it("should accept second parameter as empty array", () => {
    const INPUT1 = [];
    const INPUT2 = [
      [1.2, -1],
      [2, 3],
    ];
    const OUTPUT = [
      [1.2, -1],
      [2, 3],
    ];
    assert.deepEqual(addPolynomials(INPUT1, INPUT2), OUTPUT);
  });

  it("should be equal", () => {
    const INPUT1 = [
      [1, 2],
      [2, 2],
    ];
    const INPUT2 = [
      [3, 2],
      [4, 2],
    ];
    const OUTPUT = [
      [1, 2],
      [2, 2],
      [3, 2],
      [4, 2],
    ];
    assert.deepEqual(addPolynomials(INPUT1, INPUT2), OUTPUT);
  });

  it("should be equal", () => {
    const INPUT1 = [
      [0, 2],
      [2, 2],
      [1231, -123],
      [22131.231, 2123.23],
    ];
    const INPUT2 = [
      [-1231.213, 21231],
      [-1231.21, -2.213],
    ];
    const OUTPUT = [
      [-1231.213, 21231],
      [-1231.21, -2.213],
      [0, 2],
      [2, 2],
      [1231, -123],
      [22131.231, 2123.23],
    ];
    assert.deepEqual(addPolynomials(INPUT1, INPUT2), OUTPUT);
  });

  it("should be equal", () => {
    const INPUT1 = [
      [-313.23, 212312],
      [0, 2],
      [2, 2],
      [123123, -1231231],
      [22131231.23, 2123.23],
    ];
    const INPUT2 = [
      [-313.23, 121212312],
      [-31.21, -3131.213],
      [123123, -1231233431],
    ];
    const OUTPUT = [
      [-313.23, 121424624],
      [-31.21, -3131.213],
      [0, 2],
      [2, 2],
      [123123, -1232464662],
      [22131231.23, 2123.23],
    ];
    assert.deepEqual(addPolynomials(INPUT1, INPUT2), OUTPUT);
  });
});
