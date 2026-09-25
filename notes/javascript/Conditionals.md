# Topic: Conditionals
**Date:** 2026-Sep-24
**Phase:** Phase 1 — Javascript
**Status:**  🟠learning | understood | mastered

## Overview

What you'll learn:

* `if` / `else if `/ `else`

* Comparison operators: `===`, `!==`, `<`, `>`, `<=`, `>=`

* Logical operators: `&&`(and), `||` (or), `!` (not)

* conditions work well with boolean variables
---


## What I learned
- I learnd that if/els statements are like forks in a road. If something is true the code execute; if not, there's another route or n othing happens. The thing that decides the fork is a condition that evaluates to `true` or `false`.
- 
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
- ` els if` conditional lets you check more than one condition, in order, until one matches.
- `if`/`else if`/`else` is one chain - only the first matching branch runs. Seperate if statementens (no `els`) each run independently. Order checks most specific -> lease specific, or later branches become unreachable.

- `false` - advance to the next check
- `true` - run and stop
- no `else` + no match - nothing runs
- `if` — the first check in a chain. Runs its block if the condition is true.
- `else if` — an additional check. Only runs if every check above it was false.
- `else` — the catch-all. Runs if nothing above matched. No condition of its own.


## Resources used
- 

## Next steps
- 
