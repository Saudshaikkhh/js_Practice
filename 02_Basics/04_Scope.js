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

//Scope level 

// function one() {
//     const Name = "Shaikh Mohammed Saud"
//     function two() {
//         const website = "youtube"
//         console.log(Name);
//     }
//     console.log(website);
//     two()
    
// }
// One()
/*
Note:
The above gave error beacause
In simple terms, the error happens because the website variable is defined inside the two() function, 
so it can only be used inside two(). When you try to access website outside of two() (in one()), 
it's not found, resulting in an error. However, Name is accessible inside two() because it's in the 
outer function (one()), so it works fine there
*/
 
// Same thing goes for if blocks it will gives error
// if (true) {
//     const username = "saud shaikh"
//     if(username === "saud shaikh"){
//         const website = "ultrainstinct.com"
//         console.log(website+username)
//     }
//     console.log(website);
    
// }
// console.log(username);

//Mini hosting

console.log(addone(45));
function addone(num1) {
    return num1 +1
    
}

/*
Note:
Mini hoisting refers to JavaScript's behavior of moving variable and function declarations to the top
of their scope before executing the code. However, only the declaration is hoisted, not the value assignment. 
For example, if you try to use a variable before it's assigned a value, it will return undefined because only 
the declaration was hoisted, not the value.
*/
//console.log(newfun(55)); //Unlike above declaration of function it will give error
const newfun = function (num1) {
    return num1 + 2
}
//console.log(newfun(55)); Output: 57
