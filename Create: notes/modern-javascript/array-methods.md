# Topic: Array Methods
**Date:** 2026-Sep-28
**Phase:** Phase 2 — Modern JavaScript
**Status:** 🟠 learning

## What I learned
- Array methods replace the entire `for` loop with one line.
```js
// old way - for loop
for (let i = 0; i < nums.length; i++) {
  console.log(nums[i] * 2)
}

// .map() - transform each item
nums.map(n => n * 2)
// doubled is [2, 4, 6] 

// .filter() - Filter item to...
const nums = [1, 2, 3, 4, 5]
const evens = nums.filter(n => n % 2 === 0)      // Read as "Filter to keep only the evens"
// evens is [2, 4]

// .forEach() - for each item....
const names = ["Alice", "Bob"]
names.forEach(name => console.log(name))

// prints:
// Alice
// Bob

```
- `.map() ` returns new array (same length), use when transforming every item.
- `.filter()` returns new array (shorter), use when keeping only some items.
- `.forEach()` returns nothing. Use when doing something with each item.
- `.map()` and `.filter()` dont change the original array. They return a new one


## Code snippet / demo

Full working examples: [array-methods.js](../../projects/js-practice/array-methods.js)

## Gotchas / mistakes



## Resources used

- DeepSeek chat

## Next steps

- Unit 4: Destructuring & Spread
