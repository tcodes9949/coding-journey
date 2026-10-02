// Part 1 — Object destructuring
const person = { name: "Tom", age: 30, city: "Austin" }
const { name, city } = person

console.log(name)
console.log(city)

// Part 2 — Array destructuring
const colors = ["red", "green", "blue"]
const [first, second] = colors

console.log(first)
console.log(second)

// Part 3 — Spread: copy an array
const nums = [1, 2, 3]
const copy = [...nums]
nums.push(4)

console.log(nums)
console.log(copy)

// Part 4 — Spread: combine arrays
const a = [1, 2]
const b = [3, 4]
const combined = [...a, ...b]

console.log(combined)

// Part 5 — Spread with objects
const user = { name: "Tom", age: 30 }
const updated = { ...user, age: 31 }

console.log(user)
console.log(updated)
