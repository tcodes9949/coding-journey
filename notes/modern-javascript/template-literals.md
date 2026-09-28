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
- Don't leave text outside `console.log( )`. Bare words on their own line are read as variables → `ReferenceError`.
- Use **one pair** of backticks around the whole string. `${ }` goes *inside* them — not between separate backtick pairs.

## Resources used

- DeepSeek chat

## Next steps

- Unit 3: Array Methods
