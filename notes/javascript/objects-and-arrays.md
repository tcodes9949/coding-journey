# Topic: Objects and Arrays
**Date:** 2026-seo-25
**Phase:** Phase 1 — JavaScript
**Status:** 🟠learning 

## What I learned
- `arrays` - is an ordered list wrapped in square brackets "[...]"
- each item has a position number, the first item starts at `0` no `1`
- `length` - how many items that are in the index
- `Object` - An object groups values with lables(keys) wrapped with curley brackets "{...}"
  - Each entry is a key paired with a value 
  - When acessing/ calling values: use dot notation ( consolelog.(person.name))
  - Order doesn't matter , lables do, you just call `person.name`


## Code snippet / demo

### Array of colors

```js
let colors = ["red", "green", "blue"]
let numbers = [1, 2, 3, 4, 5]
let mixed = ["Alice", 30, true]
```

### Index number positions
```js
let colors = ["red", "green", "blue"]
//               0      1       2

consloe.log(colors[0])     //square brackets + number prints item
console.log(colors[1])
consloe.log(colors[2])
```
### Objects - labeled values

```js
let person = {
  name: "Alice"                // each entry has key: value pair
  age: 30,
  isReady: true
}

console.log(person.name)      // "Alice"
console.log(person.age)       // 30
console.log(person.isReady)   // true
```

### Length: print how many items
```js
console.log(colors.length)    // 3
```

### Array of objects 
```js
let people = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 }
]
```
### Looping through them
```js
for (let i = 0; i < people.length; i++) {
  console.log(people[i].name)
}

```

// code here

## Gotchas / mistakes
- Arrays start at 0, not 1. 
- Dot vs Brackets for objects

## Resources used
- 

## Next steps
- 
