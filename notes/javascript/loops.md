# Topic: Loops
**Date:** 2026-sep-25
**Phase:** Phase 1 — JavaScript
**Status:** 🟠learning 

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
for (let i = 1; i <= 5; i++) {     // start, condition, step — all in one line.
  console.log(i)
}
```
Same output but 5 lines became three. Now imagine printing 1 to 1,000. No loop? You'd write 1,000 lines. With loop 3 lines.
The whole point of loops is to do the boring repetition for you.

```js
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {            //used to test if the output will be even
    console.log(i);
  }
}
```

## Gotchas / mistakes
- The loop checks the condition before the first run, and prints the starting value first — it doesn't skip ahead.
- infinite loops - when in the `while` loop when `i++` is forgotten
- Double check code for mispelling and commit frequently
- make sure my variables match when writing my code
  

## Resources used
-  Replit - to run/test the code

## Next steps
- Unit 4: functions
