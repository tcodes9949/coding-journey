# Topic: Modules
**Date:** 2026-Oct-01
**Phase:** Phase 2 — Modern JavaScript
**Status:** 🟠 learning

## What I learned
- Modules let you split code across files and share pieces between them.
- `export` - a file shares something.
- `import` - a file uses something from another file.


## Code snippet / demo

Full working examples: [modules/](../../projects/js-practice/modules/)

## Gotchas / mistakes

- **Unverified** — never actually ran an `import`/`export` file. Skipped due to setup friction (`.mjs` or `package.json`). Needs a real run to confirm.
- Named exports need **curly braces**: `import { add } from "./math.js"` — not `import add`.
- Default exports do **not**: `import greet from "./greet.js"`
- Always include `.js` in the path — `"./math.js"`, not `"./math"`



## Resources used

- DeepSeek chat

## Next steps

- Unit 6: Refactor the Calculator
