# Week 1 — Phase 1, Units 1–6

**Dates:** 2026-Sep-23 – 2026-Sep-26
**Phase:** 1 — JavaScript
**Status:** ✅ complete

## What I built

- [glossary](../notes/javascript/glossary.md) — variables & data types
- [variables note](../notes/javascript/variables-and-data-types.md)
- [conditionals.js](../projects/js-practice/conditionals.js) + [note](../notes/javascript/conditionals.md)
- [loops.js](../projects/js-practice/loops.js) + [note](../notes/javascript/loops.md)
- [functions.js](../projects/js-practice/functions.js) + [note](../notes/javascript/functions.md)
- [objects.js](../projects/js-practice/objects.js) + [note](../notes/javascript/objects.md)
- [console-calculator/](../projects/console-calculator/)

### Drill files
- [functions-drill.js](../projects/js-practice/drills/functions-drill.js)
- [loops-trace-drill.js](../projects/js-practice/drills/loops-trace-drill.js)

## What I learned

- keywords (`let`, `const`, `var`) declare variables. Data types are the kind of value a variable holds — `string`, `number`, `boolean`, `null`, `undefined`.
- A function is a reusable recipe. `return` gives a value back to the caller; `console.log` only shows it. A function with no `return` gives back `undefined`.
- Loops: `for` when you know how many times; `while` when you repeat until something changes.
- Conditionals: `if`/`else if`/`else` is one chain — only the first match runs. Order most-specific → least-specific, or later branches are dead code.
- Arrays vs objects: Arrays are ordered lists, accessed by index (starting at 0). Objects are labeled collections, accessed by key.

## What was hard

- `return` vs `console.log` (took multiple tries)
- Typos that break files: `function`, `else`, `console.log`
- Balance of `{}` and `()`
- Commas in objects/arrays
- Trace the condition — don't assume the first item prints
- **Operator + operand selection** — rushing and pattern-matching instead of reading the setup
- **Syntax precision** — typos, brace/comma balance (pace issue, not knowledge)

## Diagnostic & retests

- **Initial:** 7.5/10 — passed variables, types, `==` vs `===`, conditionals, objects; failed functions, loops
- **Retests:** 7 → 7.5 → 9 → 9 → 8.5
- **Drilled cold (no notes) until pass:** functions, loops, question-reading
- **Standing habit:** read the ask → trace every line → check operators → don't invent values → then answer

## Gaps carried forward

Closed after drilling (passed):
- [x] functions: `return` vs `console.log` — PASS
- [x] functions: write from scratch — PASS
- [x] loops: write `for`/`while` cold — PASS
- [x] loops: accumulator trace — PASS
- [x] question-reading: sequence vs single value — PASS

Still open (carried to Week 2):
- [ ] operator + operand selection — WATCH
- [ ] syntax precision — WATCH

## What's next

- Phase 2
