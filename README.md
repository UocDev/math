# 🧮 Math 
is a low-memory, logic-first math toolkit — Perfect for Discord bots, quiz mini-games, or retro-inspired applications.

## 📦 Installation 
```bash
npm install @uocdev/math-fpe
```
## ⚒️ Module  & Feature
### 1. Arithmetic
Example: 
```js
const {
  generateProblem,
  checkAnswer,
  evaluate,
  formatProblem
} = require('@uocdev/math-fpe');

const prob = generateProblem('medium');
console.log(formatProblem(prob.question)); // e.g., "7 * 3 = ?"

const userInput = 21;
console.log("Correct?", checkAnswer(userInput, prob.answer)); // true or false

console.log(evaluate("2 + 2 * 3")); // 8
```
**Method**
| Function | Input Type | Output Type | Description |
|----------|------------|-------------|-------------|
|`generateProlem()`|`difficulty = 'easy'`|`'medium'`|'hard'|
|`checkAnswer()`|`input: number, answer: number`|`boolean`|Compare user input with correct answer|
|`evaluate`|`expression: string`|`number`|Evaluate basic math expression|
|`formatProblem`|`expression: string`|`string`|Formats a question into `a + b = ?`|

## 💬 Feedback / Issue 
free feel open PR or IR for make this package better, remember this open source package.
