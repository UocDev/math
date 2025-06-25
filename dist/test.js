const assert = require('assert');
const { evaluate } = require('./index');

console.log('Running evaluate() tests...');

// Test case array: [expression, expectedResult]
const testCases = [
  ['2 + 2', 4],
  ['3 * 5', 15],
  ['10 / 2', 5],
  ['8 - 3', 5],
  ['2 + 3 * 4', 14],
  ['(2 + 3) * 4', 20],
  ['100 / (5 * 2)', 10],
  ['7 +', NaN], // invalid expression
  ['abc + 2', NaN], // invalid expression
];

let passed = 0;

testCases.forEach(([expr, expected], idx) => {
  const result = evaluate(expr);
  const isPass = isNaN(expected) ? isNaN(result) : result === expected;

  try {
    assert.strictEqual(isPass, true);
    console.log(`Test #${idx + 1} passed — "${expr}" → ${result}`);
    passed++;
  } catch (err) {
    console.error(`Test #${idx + 1} failed — "${expr}" → Got ${result}, expected ${expected}`);
  }
});

console.log(`Finished: ${passed}/${testCases.length} tests passed.`);
process.exit(passed === testCases.length ? 0 : 1);
