# Topic: Template Literals
**Date:** 2026-Sep-28
**Phase:** Phase 2 — Modern JavaScript
**Status:** 🟠 learning

## What I learned

- Template literals use **backticks** instead of **quotes** — the key under `Esc`.
- Use `${}` instead of `+` gluing.

```js
// Old way
const greeting = "Hello, " + name + "!"

// New way
const greeting = `Hello, ${name}!`
```

## Code snippet / demo

Full working examples: [template-literals.js](../../projects/js-practice/template-literals.js)

## Gotchas / mistakes
- The backticks wrap the ENTIRE string — start to end. Not each piece.
- Stray text outside backticks — bare words like im on their own line are read as variables → ReferenceError. Everything goes inside console.log( ... ).
- Only one pair of backticks — they wrap the whole string, not each piece. ${ } goes inside them.



## Resources used

- DeepSeek chat

## Next steps

- Unit 3: Array Methods
