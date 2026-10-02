
# Topic: Destructuring & Spread
**Date:** 2026-Sep-30
**Phase:** Phase 2 — Modern JavaScript
**Status:** 🟠 learning

## What I learned
- Object destructuring pulls values out by Key; `{ name } = obj.`
- Array destructuring  pulls values out by position; `[a, b] = arr.`
- Spread copies or combines ; `...`
- `Objects` -> `{}` -> pull by key
- `Arrays` -> `[]` -> pull bvy position
- The `Spread` operator is `...` (three dots)
  


## Code snippet / demo

Full working examples: [destructuring.js](../../projects/js-practice/destructuring.js)

### Destructuring
```.js
// Old way
const person = { name: "Tom", age: 30 }

const name = person.name
const age = person.age

// New way
const person = { name: "Tom", age: 30 }

const { name, age } = person


```

### Arrays:
```.js
const colors = ["red", "green", "blue"]

// Old way
const first = colors[0]
const second = colors[1]

// Destructuring
const [first, second] = colors
```

### Spread - copying and combining

```.js
// Copy an array:
const nums = [1, 2, 3]
const copy = [...nums]

// copy is [1, 2, 3] — a NEW array

// Combine arrays:
const a = [1, 2]
const b = [3, 4]
const combined = [...a, ...b]

// combined is [1, 2, 3, 4]

// Add to an array without changing the original:
const nums = [1, 2, 3]
const more = [...nums, 4]

// more is [1, 2, 3, 4]
// nums is still [1, 2, 3] — unchanged

// Same with objects:
const person = { name: "Tom", age: 30 }
const updated = { ...person, age: 31 }

// updated is { name: "Tom", age: 31 }
// person is still { name: "Tom", age: 30 }

```


## Gotchas / mistakes

- `const copy = nums` is **not** a copy — it's the *same* array with two names. Mutating one mutates both. Use `[...nums]` for a real copy.
- Spread **order matters**. `{ ...user, age: 31 }` overrides `age` → 31. `{ age: 31, ...user }` does **not** — the spread overwrites the 31. Later wins.
- **`{ }` for objects, `[ ]` for arrays.** Mix them up → `undefined`.
  - `const { name } = person` ✅ (object → curly braces)
  - `const [first] = colors` ✅ (array → square brackets)
- `.push()` **mutates** the original array. Spread **creates a new one**. Different behavior — pick based on whether you want the original changed.



## Resources used

- DeepSeek chat

## Next steps

- Unit 5: Modules
