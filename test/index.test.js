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
      [123123, -1231231],
      [22131231.23131, 2123.2323],
    ];
    const INPUT2 = [
      [-12313.231321, 21231231231],
      [-1231.21, -23123131.213131231],
    ];
    const OUTPUT = [
      [-12313.231321, 21231231231],
      [-1231.21, -23123131.213131231],
      [0, 2],
      [2, 2],
      [123123, -1231231],
      [22131231.23131, 2123.2323],
    ];
    assert.deepEqual(addPolynomials(INPUT1, INPUT2), OUTPUT);
  });

  it("should be equal", () => {
    const INPUT1 = [
      [-12313.231321, 212312],
      [0, 2],
      [2, 2],
      [123123, -1231231],
      [22131231.23131, 2123.2323],
    ];
    const INPUT2 = [
      [-12313.231321, 121212312],
      [-1231.21, -23123131.213131231],
      [123123, -1231233431],
    ];
    const OUTPUT = [
      [-12313.231321, 121424624],
      [-1231.21, -23123131.213131231],
      [0, 2],
      [2, 2],
      [123123, -1232464662],
      [22131231.23131, 2123.2323],
    ];
    assert.deepEqual(addPolynomials(INPUT1, INPUT2), OUTPUT);
  });
});
