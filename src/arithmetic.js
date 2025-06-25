function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateProblem(difficulty = 'easy') {
  const operators = {
    easy: ['+', '-'],
    medium: ['+', '-', '*'],
    hard: ['+', '-', '*', '/'],
  };

  const opList = operators[difficulty] || operators.easy;
  const a = randomInt(1, difficulty === 'hard' ? 50 : 20);
  const b = randomInt(1, difficulty === 'hard' ? 50 : 20);
  const op = opList[randomInt(0, opList.length - 1)];

  const question = `${a} ${op} ${b}`;
  const answer = evaluate(question);

  return { question, answer };
}

function checkAnswer(input, correctAnswer) {
  return Number(input) === Number(correctAnswer);
}

// Safe evaluator (no eval)
function evaluate(expr) {
  try {
    return Function(`"use strict"; return (${expr})`)();
  } catch {
    return NaN;
  }
}

function formatProblem(q) {
  return `${q} = ?`;
}

module.exports = {
  generateProblem,
  checkAnswer,
  evaluate,
  formatProblem,
};
