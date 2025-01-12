/*
Note:
In JavaScript, scope refers to the context in which variables are accessible. There are three main types of scope:

1.Global Scope: Variables declared outside of any function or block are accessible everywhere in the code.

2.Function Scope: Variables declared inside a function are only accessible within that function.

3.Block Scope: (introduced with let and const): Variables declared inside a block (e.g., {} in if, for) are confined to that block.

The var keyword, however, does not support block scope, which can cause unexpected behavior. Variables declared with var are 
function-scoped, and even if declared inside a block, they are accessible outside it. Additionally, var variables are hoisted, 
meaning they are moved to the top of their scope during execution, often leading to bugs.
*/

// Var problem in scope
let a = 20
const b = 50
var c = 6

if (true) {
    let a = 200
    const b = 500
    var c = 60
    
}
console.log(c); // 60 this should not happen
console.log(a); //Output: 20



