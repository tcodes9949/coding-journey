function add(a, b) {
  return a + b
}
function subtract(a, b) {
  return a - b
}
function multiply(a, b) {
  return a * b
}
function divide(a, b) {
  return a / b
}

let num1 = 10
let num2 = 5
let operation = "@"

if (operation === "+"){
  console.log(add(num1,num2))
  } else if (operation === "-") {
  console.log(subtract(num1, num2))
  } else if (operation === "*") {
  console.log(multiply(num1, num2))
  } else if (operation === "/"){
  console.log(divide(num1, num2))
  } else {
  console.log("Function not available")
}


