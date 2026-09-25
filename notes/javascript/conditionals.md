# Topic: Conditionals
**Date:** 2026-Sep-24
**Phase:** Phase 1 — JavaScript
**Status:**  🟠learning | understood | mastered

## Overview

What you'll learn:

* `if` / `else if `/ `else`
* Comparison operators: `>`/ `>=`
---

## What I learned

- `if`/`else` statements are like forks in a road. If a condition is `true`, its code runs; if not, another route runs — or nothing does.
- The thing that decides the fork is a condition that evaluates to `true` or `false`.
- `if` is the first check in a chain. `else if` adds another check — it only runs if everything above it was `false`. `else` is the catch-all: it runs if nothing matched, and has no condition of its own.

## Code snippets / demo

Full working examples: [conditionals.js](../../projects/js-practice/conditionals.js)

The core pattern:

```js
if (condition) {
  // runs if true
} else if (otherCondition) {
  // runs if the first was false and this is true
} else {
  // runs if nothing above matched
}
```

## Gotchas / mistakes
- In an if/else if/else chain, only the first matching branch runs. Separate if statements (no else) each run independently.
- Order checks **most specific → least specific** — a broad check first makes later branches **unreachable dead code.**
- No `else` + no match = **nothing runs.** Silence.

## Resources used
- Bro Code — JavaScript if/else

## Next steps
-  unit 3: Loops
