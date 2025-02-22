const { calculateSquares } = require("./squares.js");
const { describe, test } = require("node:test");
const assert = require("node:assert");

describe("calculateSquares", () => {
  test("gcd(16, 40) = 8", () => {
    const squares = calculateSquares(16, 40);
    const lastSquare = squares.pop();
    assert.strictEqual(lastSquare.size, 8);
  });
  test("gcd(54, 120) = 6", () => {
    const squares = calculateSquares(54, 120);
    const lastSquare = squares.pop();
    assert.strictEqual(lastSquare.size, 6);
  });
  test("gcd(631, 127) = 1", () => {
    const squares = calculateSquares(631, 127);
    const lastSquare = squares.pop();
    assert.strictEqual(lastSquare.size, 1);
  });

  test("calculateSquares(10, 30)", () => {
    const squares = calculateSquares(10, 30);
    assert.deepStrictEqual(squares, [
      { size: 10, left: 0, top: 0 },
      { size: 10, left: 10, top: 0 },
      { size: 10, left: 20, top: 0 },
    ]);
  });

  test("calculateSquares(60, 24)", () => {
    const squares = calculateSquares(60, 24);
    assert.deepStrictEqual(squares, [
      { size: 24, left: 0, top: 0 },
      { size: 24, left: 0, top: 24 },
      { size: 12, left: 0, top: 48 },
      { size: 12, left: 12, top: 48 },
    ]);
  });

  test("calculateSquares(50, 50)", () => {
    const squares = calculateSquares(50, 50);
    assert.deepStrictEqual(squares, [{ size: 50, left: 0, top: 0 }]);
  });

  test("calculateSquares(0, 0)", () => {
    const squares = calculateSquares(0, 0);
    assert.strictEqual(squares.length, 0);
  });

  test("calculateSquares(2.5, 6.25)", () => {
    const squares = calculateSquares(2.5, 6.25);
    assert.deepStrictEqual(squares, [
      { size: 2.5, top: 0, left: 0 },
      { size: 2.5, top: 0, left: 2.5 },
      { size: 1.25, top: 0, left: 5 },
      { size: 1.25, top: 1.25, left: 5 },
    ]);
    console.log(squares);
  });

  test("throws an error if negative dimensions are passed", () => {
    assert.throws(() => calculateSquares(-1, 0));
  });
});
