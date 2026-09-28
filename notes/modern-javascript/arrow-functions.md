# Topic: Arrow Functions
**Date:** 2026-Sep-28
**Phase:** Phase 2 — Modern JavaScript
**Status:** 🟠 learning

## What I learned

- Arrow functions are a faster way to write functions.
  - Old: `function add(a, b) { return a + b }`
  - New: `const add = (a, b) => a + b`
- The short form is called **implicit return** — the value after `=>` is automatically returned.
- Use `const`, not `let` — you don't reassign the function later.
- Parameter rules:
  - 0 parameters → need `()` → `const hi = () => "hi"`
  - 1 parameter → parens optional → `const double = n => n * 2`
  - 2+ parameters → need `()` → `const add = (a, b) => a + b`
  - Most people keep the parens — it's clearer.

## Code snippet / demo

Full working examples: [arrow-functions.js](../../projects/js-practice/arrow-functions.js)

### Implicit return

```js
const add = (a, b) => a + b
```

### Multi-line functions need `{}` and `return`

```js
const greet = (name) => {
  const message = "Hello, " + name
  return message
}
```

## Gotchas / mistakes

A multi-line arrow function (with `{}`) needs an **explicit `return`**. Only the short form auto-returns.

```js
// ❌ returns undefined — no return
const add = (a, b) => { a + b }

// ✅ explicit return
const add = (a, b) => { return a + b }

// ✅ short form — auto-returns
const add = (a, b) => a + b
```

## Resources used

- DeepSeek chat

## Next steps

- Unit 2: Template Literals
