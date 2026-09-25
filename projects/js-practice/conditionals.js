let temp = 30 // let establishes the the variable to test conditions against (temp=30)

if (temp > 25){ // `if` starts a conditiona; (temp>25") - Condition/boolean `true`or `false` ; {} code block - the instructions to run if the condition is `true`
  console.log("It's hot") // statement - prints "It's hot"
} els if (temp >= 15){ //`else if` "if previous check was false, try this one instead"; (temp>= 15) "is temp 15 or more?"
  console.log("It's nice") // run this if thats `true`
} else { // no condition. Run if everything above was false
  console.log("It's cold") // the fallback
}
