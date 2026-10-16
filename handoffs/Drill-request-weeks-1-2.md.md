# Handoff — Drill Request (Weeks 1–2 + Pomodoro)

**Date:** 2026-Oct-15
**Requested by:** tcodes9949
**Purpose:** Drill the material covered in Weeks 1–2 (Phases 1 & 2) plus the Pomodoro timer project. User wants to consolidate before starting Phase 4 (HTML & CSS).

---

## Context

User completed:
- **Phase 1 — Coding Basics** (variables, conditionals, loops, functions, objects/arrays, console calculator)
- **Phase 2 — Modern JavaScript** (arrow functions, template literals, array methods, destructuring, spread, modules)
- **Modules were just verified** with a real file run (`index.mjs` + `math.mjs` → output `15, 5, 50, 2`)
- **Pomodoro timer project** — a working terminal countdown using `setInterval`

User wants to consolidate before moving to new material (HTML & CSS).

---

## Watch items carried forward (from previous handoffs)

- **Verb precision (RECURRING)** — map=transforms, filter=keeps, some=any, every=all, reduce=folds
- **Precision habit (RECURRING)** — read the exact ask, check operators and bounds
- **Syntax precision** — typos, brace/comma balance, variable name matching
- **Structural reasoning** — which block is inside which (this was the Pomodoro bug: `if` outside `setInterval`)
- **Save before running** — check for the dot next to the filename

---

## Drill targets

### 1. Array method verb precision (priority)

User passed 7/7 on this previously. Confirm it's still cold.

Questions to test:
- Which method transforms every item? (map)
- Which keeps only matching items? (filter)
- Which returns true if ANY match? (some)
- Which returns true if ALL match? (every)
- Which folds an array into one value? (reduce)
- Which just runs code on each item without returning? (forEach)

### 2. Structure and nesting

Given a code snippet, ask:
- Which `{` closes which `}`?
- What runs every tick vs. what runs only once?
- What happens if this line moves outside the block?

Use the Pomodoro timer as source material:
```js
const id = setInterval(() => {
  console.log(timeLeft)
  timeLeft = timeLeft - 1

  if (timeLeft === 0) {
    console.log("DONE!")
    clearInterval(id)
  }
}, 1000)
```

### 3. Trace drills

- `setInterval` mechanics — what's the exact output, in order, and how long until it stops?
- Loop traces — accumulator, print-inside vs print-outside
- Array method chains — `.map().filter()` — trace each intermediate step

### 4. Precision traps (new questions)

- `===` vs `=` vs `==`
- `<` vs `<=`, `>` vs `>=`
- `i++` vs `++i`
- `let` vs `const` reassignment
- Object key matching (`result` vs `results`)
- Array index off-by-one (`colors[3]` on a 3-item array)

### 5. Modules (just verified — confirm it stuck)

- What does `export` do? What does `import` do?
- Why did `math.js` fail but `math.mjs` work?
- Named vs default exports
- What happens if you forget the extension in the import path?

### 6. Live coding (cold, from memory)

Ask user to write from scratch, without notes:
- A `for` loop counting 1 to 5
- An arrow function that doubles a number
- A `.map()` that doubles every item in an array
- A `.filter()` that keeps only numbers > 10
- The full Pomodoro core (state → interval → condition → stop)

---

## Format preference

- **10-question cold retests**, mixed format
- **"Are you sure?"** before grading — catches accidental submits
- **Retest until 10/10** — gaps stay flagged until flipped
- **Soft gate** — fail doesn't block, gap carries forward

---

## Desired outcomes

After drilling:
1. Confirm array method verbs are still cold
2. Confirm `setInterval` structure is understood
3. Confirm modules concept stuck
4. Surface any NEW precision gaps
5. Return a handoff so the tutor agent can update `week-02.md` and the Kanban board

---

## Files for reference

- `projects/js-practice/` — all practice files from Phases 1 & 2
- `projects/js-practice/drills/` — existing drills (loops-trace-drill.js, modern-js-drill.js)
- `projects/micro-projects/pomodoro-timer/index.js` — working Pomodoro timer
- `projects/js-practice/modules/` — verified modules example
- `notes/javascript/` and `notes/modern-javascript/` — concept notes
- `progress/week-01.md` and `progress/week-02.md` — weekly logs
