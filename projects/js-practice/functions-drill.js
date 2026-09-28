// functions-drill.js
// Phase 1 — functions: return vs console.log, write from scratch

// 1. return vs console.log — a function with no return gives back undefined.
function greet(name) {
  return "Hello, " + name;
}
console.log(greet("Sam"));        // "Hello, Sam"

// 2. return value used in an expression.
function double(n) {
  return n * 2;
}
console.log(double(5));           // 10
console.log(double(10) + 1);      // 21

// 3. BUG: console.log where return belongs -> caller gets undefined.
function greetFix(name) {
  return "Hi, " + name;           // was: console.log(...)
}
let message = greetFix("Sam");
console.log(message);             // "Hi, Sam"

// 4. write from scratch — square
function square(num) {
  return num * num;               // or num ** 2
}
console.log(square(2));           // 4

// 5. write from scratch — isEven (returns true/false)
function isEven(num) {
  return num % 2 === 0;
}
console.log(isEven(4));           // true
console.log(isEven(5));           // false

// 6. return vs console.log, in words:
//    return gives a value back to the caller AND exits the function.
//    console.log just prints and evaluates to undefined.
