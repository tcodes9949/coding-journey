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
  3.`(__)` - the a blank to fill in later
  4.`{...}`- the body - steps that run

## Code snippet / demo

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

// code here

## Gotchas / mistakes
- 

## Resources used
- 

## Next steps
- 
