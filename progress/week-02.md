# Week 2 — Phase 2, Units 1–6

**Dates:** 2026-Sep-28 – 2026-Oct-01
**Phase:** 2 — Modern JavaScript
**Status:** ✅ complete

## What I built

- [arrow-functions.js](../projects/js-practice/arrow-functions.js) + [note](../notes/modern-javascript/arrow-functions.md)
- [template-literals.js](../projects/js-practice/template-literals.js) + [note](../notes/modern-javascript/template-literals.md)
- [array-methods.js](../projects/js-practice/array-methods.js) + [note](../notes/modern-javascript/array-methods.md)
- [destructuring.js](../projects/js-practice/destructuring.js) + [note](../notes/modern-javascript/destructuring-spread.md)
- [modules/](../projects/js-practice/modules/) + [note](../notes/modern-javascript/modules.md)
- [console-calculator/](../projects/console-calculator/) — refactored
- [modern-js-drill.js](../projects/js-practice/drills/modern-js-drill.js) — Phase 2 drill

## What I learned

- **Arrow functions** — shorter syntax with implicit return.
- **Template literals** — backticks and `${}` instead of `+` gluing.
- **Array methods** — `.map()`, `.filter()`, `.forEach()` replace `for` loops.
- **Destructuring & spread** — pull values out, copy without mutating the original.
- **Modules** — `export` / `import` split code across files.
- These are the patterns React, Web3, and AI libraries use — this is how modern JS is written.

## What was hard

- `nums.map` vs `(nums.map => ...)` — misplaced parentheses
- `result` vs `results` — variable name mismatch → `ReferenceError`
- Stray text outside `console.log( )` → `ReferenceError`
- Backticks wrapping only part of the string instead of the whole thing
- Module setup friction (skipped running)

## Diagnostic & retests

- **Phase 2 diagnostic:** 7.5/10 → 7/10 → 10/10
- **Verb precision drill** (`.map`/`.filter`/`.some`/`.every`/`.reduce`): 7/7
- **Phase 1 final retest:** 8.5/10
- **Method:** 10-question cold retests, retest until 10/10, gaps stay flagged until flipped

## Gaps carried forward

Closed (passed cold):
- [x] arrow functions — PASS
- [x] template literals — PASS
- [x] array methods (`map`/`filter`/`reduce`/`every`/`some`) — PASS
- [x] spread `[...]` / `{...}` — PASS
- [x] destructuring — PASS

Still open (carried forward):
- [ ] **modules (`import`/`export`)** — UNVERIFIED — never ran a real file
- [ ] **verb precision** — RECURRING — read as English: map=transforms, filter=keeps, some=any, every=all, reduce=folds
- [ ] **precision habit** — RECURRING — read the exact ask, check operators + bounds

## What's next

- Phase 3 (per roadmap)
