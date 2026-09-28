
# Topic: Arrow Functions
**Date:** 2026 - Sep - 28
**Phase:** Phase 2 — Modern JavaScript
**Status:** 🟠learning 

## What I learned

-  Arrow functions are a faster way to write functions 
  - `function add(a, b) { return a + b }` - `const add = (a, b) => a + b`
  - `const add = (a, b) => a + b`
  - The short form function is called `implicit return`
  - the value after `=>` is automatically returned

- Use `const` not `let` , you don't reassign the function later.
- No parameters around n. But:
 - 0 parameters → need `()` → const hi = () => "hi"
- 1 parameter  → parens optional → const double = n => n * 2
- 2+ parameters → need `()` → const add = (a, b) => a + b
      ** Most people keep the parens , its clearer **

      
## Code snippet / demo

 ### Implicit return
  
```js
const add = (a, b) => a + b
```

 ### If the function has more than one line, you need {} and return:
  
```js
const greet = (name) => {
const message = "Hello, " + name
return message
}
```

## Gotchas / mistakes

 ### If there's exactly one parameter, you can drop the parentheses:
 ```js
 const double = n => n * 2
 ```
  
## Resources used
- Deepseek ai chat

## Next steps
- Unit 2: Template Literals
