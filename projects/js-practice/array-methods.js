// Part 1 — .map(): double every number
const nums = [1, 2, 3, 4, 5]
const double = nums.map(n => n * 2)
console.log(double)

// Part 2 — .filter(): keep only evens
const evens = nums.filter(n => n % 2 === 0)
console.log(evens)

// Part 3 — .forEach(): print each name
const names = ["Tom", "Alice", "Bob"]
names.forEach(name => console.log(name))

// Part 4 — chain .map() then .filter()
const result = nums.map(n => n * 2).filter(n => n > 5)
console.log(result)
