
# Topic: Arrow Functions
**Date:** 2026 - Sep - 28
**Phase:** Phase 2 — Modern JavaScript
**Status:** 🟠learning 

## What I learned

-  Arrow functions are a faster way to wrote functions 
  - `function add(n)` - `consat add n =`
  - `const add = (a, b) => a + b`
  - The short form function is called `implicit return`
  - the value after `=>` is automatically returned

- Use `const` not `let` , you don't reassign the function later.

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
No parens around n. But:
- 0 parens -> need `()` -> `const hi () => () "hi"`
- 1 parens -> parens optional -> `const double = n => n * 2`
- 2 parens -> need () -> `const add = (a, b) => a + b`

  ** Most people keep the parens , its cleaner **
  
## Resources used
- Deepseek ai chat

## Next steps
- 
