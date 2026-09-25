//temp to test our conditions against
let temp = 30 
//is temp greater than 25? 
if (temp > 25) {
//statement - prints "It's hot"
  console.log("It's hot") 
} else if (temp >= 15) {  // is temp 15 or more?
//run this if thats `true`
  console.log("It's nice")
//no condition. Run if everything above was false
} else { 
//the fallback
  console.log("It's cold") 
}
