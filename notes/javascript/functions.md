# Topic: Functions
**Date:** 2029-sep-25
**Phase:** Phase 1 — JavaScript
**Status:** 🟠learning 

## What I learned
- `function`- a recipe for code ( write the steps once ; name it ; say it's name when you want to reference steps again)
    ```js
    function greet(__) {
      console.log("...")
    }

    ```
- Defining the function is like writing the function recipie. Nothing happens
- Calling the function runs the code of the function. (Noting runs until you call it)
- The function parts
  1.`function` - keyword - about to write the recipie
  2.`greet` - the name - the recipie mame
  3.`(__)` - the parameter - the a blank to fill in later
  4.`{...}`- the body - steps that run
- `return` gives the value back to the caller so it can be stored and reused. 

## Code snippet / demo
Full code examples: [functions.js](../../projects/js-practice/functions.js)
### Without function:
```js
console.log("Hello, Alice")
console.log("Hello, Bob")
console.log("Hello, CHarlie")
```

### With a function:
```js
function greet(name) {      //Defining the function. 
  console.log("Hello, " + name)
}

greet("Alice")              //Calling the function
greet("Bod")
greet("Charlie")
```
Same output. Now the greeting logic lives in one place. Change it once and the rest follow.

### With return
```js
// Checks if number is even 
function isEven(num) {
  return num % 2 === 0
}
console.log(isEven(5))
console.log(isEven(8))
```

## Gotchas / mistakes
- `console.log` only shows it — the value is gone once printed.

## Resources used
- 

## Next steps
- 
