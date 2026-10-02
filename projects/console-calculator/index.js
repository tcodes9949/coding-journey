import { add, subtract, multiply, divide } from "./math.js"

const num1 = 10
const num2 = 5
const operation = "+"

if (operation === "+") {
  console.log(`${num1} + ${num2} = ${add(num1, num2)}`)
} else if (operation === "-") {
  console.log(`${num1} - ${num2} = ${subtract(num1, num2)}`)
} else if (operation === "*") {
  console.log(`${num1} × ${num2} = ${multiply(num1, num2)}`)
} else if (operation === "/") {
  console.log(`${num1} ÷ ${num2} = ${divide(num1, num2)}`)
} else {
  console.log("Function not available")
}
