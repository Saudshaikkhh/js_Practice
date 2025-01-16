/*
Note:
In JavaScript, this refers to the object that is currently running the code. If you call a 
method inside an object, this points to that object. In a regular function, this usually points to the 
global object (like window in browsers), unless you're using strict mode, where it becomes undefined. 
Arrow functions are special because they don’t have their own this; they use the this from the code around them.
*/

const user = {
    username: "saudshaikkhh",
    price:999,
    message: function(){
        console.log(`${this.username} , welcome to website.`);
        
    }
}
user.message()
console.log(this);

/*
Note:
In Node.js, when you use this outside of any function, it points to an empty object 
because Node.js runs code in modules, not the global scope. Inside a regular function, 
this refers to the global object in Node (global), just like in the browser. In a browser, 
however, this outside of any function refers to the window object because everything runs in the global scope by default. 
This difference happens because Node.js and browsers handle the global context differently.
*/

//Arrow function

const chai = () => {
    let usernameid = "saudshaikkhh"
    console.log(this.usernameid); //Note: Undefined
    console.log(usernameid); //Note: saudshaikkhh
    
}
chai()


//1st way
const addtwo = (num1,num2) => {
    return num1 + num2 
}
console.log(addtwo(5,6))

//2-way 
const addone = (num1) => (num1)  
console.log(addone(5,9))