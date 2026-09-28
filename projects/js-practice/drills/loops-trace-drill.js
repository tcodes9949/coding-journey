// loops-trace-drill.js
// RULE: a reassigned variable carries its value from the previous pass.

// --- L1: accumulator, print final value ---
let total = 0;
for (let i = 1; i <= 4; i++) {
  total = total + i;
}
console.log(total);               // 10
// trace:
// total = 0
// total = 0 + 1 = 1
// total = 1 + 2 = 3
// total = 3 + 3 = 6
// total = 6 + 4 = 10

// --- R3: accumulator with log INSIDE -> sequence ---
let sum = 0;
for (let i = 1; i <= 3; i++) {
  sum = sum + i;
  console.log(sum);               // 1, 3, 6  (sequence)
}

// --- product accumulator (multiply, start at 1) ---
let product = 1;
for (let i = 1; i <= 4; i++) {
  product = product * i;
}
console.log(product);             // 24
// trace:
// product = 1 * 1 = 1
// product = 1 * 2 = 2
// product = 2 * 3 = 6
// product = 6 * 4 = 24

// --- while loop, count down ---
let i = 3;
while (i > 0) {
  console.log(i);                 // 3, 2, 1
  i--;
}

// --- BUG: missing step -> infinite loop. Fix: add i++ inside. ---
let j = 0;
while (j < 3) {
  console.log(j);                 // 0, 1, 2
  j++;
}
