// modern-js-drill.js
// Phase 2 — modules, chaining, destructuring/spread, precision traps.
// RULE: read the exact ask. Trust the trace, not the pattern.

// ============================================================
// SECTION 1 — MODULES (unverified — run this to confirm)
// ============================================================
//
// Two files needed. Setup options:
//   A) rename both to .mjs  →  import ... from "./math.mjs"
//   B) add package.json     →  { "type": "module" }
//
// --- math.js ---
// export const add = (a, b) => a + b;
// export const multiply = (a, b) => a * b;
//
// --- index.js ---
// import { add, multiply } from "./math.js";
// console.log(add(2, 3));       // 5
// console.log(multiply(4, 5));  // 20

// --- M1: what does this print? ---
// import { subtract } from "./math.js";
// console.log(subtract(10, 4));
// answer: 6  (export in math.js: export const subtract = (a, b) => a - b)

// --- M2: why does this fail? ---
// import subtract from "./math.js";
// answer: subtract is a NAMED export, not default.
//         named exports need { curly braces }.

// ============================================================
// SECTION 2 — CHAINING (.map then .filter)
// ============================================================

// --- C1: chained, final value ---
const nums = [1, 2, 3, 4, 5];
const result = nums.map(n => n * 2).filter(n => n > 5);
console.log(result);              // [6, 8, 10]
// trace:
// map   → [2, 4, 6, 8, 10]
// filter → [6, 8, 10]

// --- C2: chain order matters ---
const result2 = nums.filter(n => n > 2).map(n => n * 2);
console.log(result2);             // [6, 8, 10]
// trace:
// filter → [3, 4, 5]
// map    → [6, 8, 10]
// NOTE: same answer here, but the intermediate arrays are different.

// --- C3: mixed verbs, read carefully ---
const items = [10, 20, 30, 40];
const hasBig = items.some(n => n > 35);   // true   — any match
const allBig = items.every(n => n > 35);  // false  — all match
console.log(hasBig, allBig);      // true false

// ============================================================
// SECTION 3 — DESTRUCTURING & SPREAD (reinforce)
// ============================================================

// --- D1: object destructuring ---
const person = { name: "Tom", age: 30, city: "Austin" };
const { name, city } = person;
console.log(name, city);          // Tom Austin

// --- D2: array destructuring ---
const colors = ["red", "green", "blue"];
const [first, second] = colors;
console.log(first, second);       // red green

// --- D3: spread copy — mutation does NOT leak ---
const original = [1, 2, 3];
const copy = [...original];
original.push(4);
console.log(original);            // [1, 2, 3, 4]
console.log(copy);                // [1, 2, 3]

// --- D4: spread object, order matters ---
const user = { name: "Tom", age: 30 };
const updated = { ...user, age: 31 };
console.log(updated);             // { name: "Tom", age: 31 }
// NOTE: later key wins. { age: 31, ...user } would give age: 30.

// ============================================================
// SECTION 4 — PRECISION TRAPS (new, different from prior drill)
// ============================================================

// --- P1: [single or sequence?] ---
let total = 0;
for (let i = 1; i <= 4; i++) { total = total + i; }
console.log(total);
// answer: 10  (single — log is OUTSIDE the loop)

// --- P2: [single or sequence?] ---
let sum = 0;
for (let i = 1; i <= 4; i++) {
  sum = sum + i;
  console.log(sum);
}
// answer: 1, 3, 6, 10  (sequence — log is INSIDE the loop)

// --- P3: [does anything print?] ---
const doubled = nums.map(n => n * 2);
// answer: No  — result stored, never logged

// --- P4: [arrow rule — implicit or explicit?] ---
const f = n => { n * 2 };
console.log(f(5));
// answer: undefined  — {} body needs an explicit return

// --- P5: [backticks vs quotes] ---
const x = 5;
console.log("Value: ${x}");
// answer: Value: ${x}  — quotes are literal, need backticks for interpolation

// --- P6: [operator check] ---
function isEven(n) { return n % 2 === 0; }
console.log(isEven(4), isEven(7));
// answer: true false

// ============================================================
// SECTION 5 — ANSWER KEY (cover with hand, cold-test yourself)
// ============================================================
// M1: 6
// M2: named export needs { }
// C1: [6, 8, 10]
// C2: [6, 8, 10]
// C3: true false
// D1: Tom Austin
// D2: red green
// D3: [1, 2, 3, 4] then [1, 2, 3]
// D4: { name: "Tom", age: 31 }
// P1: 10
// P2: 1, 3, 6, 10
// P3: No
// P4: undefined
// P5: Value: ${x}
// P6: true false
