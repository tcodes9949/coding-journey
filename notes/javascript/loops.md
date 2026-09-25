# Topic: Loops
**Date:** 2026-sep-25
**Phase:** Phase 1 — Loops
**Status:** 🟠learning | understood | mastered

## Overview

What I covered:

- `for` loops
- `while` loops
- `%` (modulo) for checking even/odd

## What I learned
- `loop` - repeats code without me writing it over and over.
- `for` - A loop for when you know how many times to repeat. The counter/condition/step are all in one line, so you can't forget the step
- `while` - A loop for when you repeat until something changes. if you forget the `i++`, the loop never ends-infinite loop, program freezes

## Code snippet / demo

Full working examples: [loops.js](../../projects/js-practice/loops.js)

### Without a loop: 
```js
console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)
```
### With a loop:
```js

for (let i = 1; i <= 5; i++) {      //Has 3 separate instructions("start counting at 1"; "keep going as long as i is 5 or less";"After each round, add 1 to i") 
  console.log(i)
}

```
Same output but. 5 lines becaame three. Now imagine printing 1-1,000. No loop? You'd write 1,000 lines. With loop 3 line.
The whole point of loops is to do the boring repetition for you.

```js
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {            //used to test if the output will be even
    console.log(i);
  }
}
```

## Gotchas / mistakes
- The loop will always attempt the 1st test on the variable written expressed on the condition
- infinite loops - when in the `while` loop when `i++` is forgotten
- 

## Resources used
-  Replit - to run/test the code

## Next steps
- Unit 4: functions
