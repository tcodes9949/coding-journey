/// Rewrite these four as arrow functions: const name = (params) => expression
function add(a, b) { 
  return a + b
} 
-  const add = (a, b) => a+ b;

function subtract(a, b) {
  return a - b
}
-  const subtract = (a, b) => a - b;

function multiply(a, b) {
  return a * b
}
-  const multiply = (a, b) => a * b;
    
function divide(a, b) {
  return a / b
}
-  const divide = (a, b) => a / b;

----------------------------------
  // Phase 1
function add(a, b) {
  return a + b
}

// Phase 2 — arrow, full form
const add = (a, b) => {
  return a + b
}

// Phase 2 — arrow, short form
const add = (a, b) => a + b
