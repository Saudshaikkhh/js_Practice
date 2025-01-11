/*
Two Ways to Declare Objects in JavaScript:
Object Literal Syntax:
Uses curly braces {} to define an object with key-value pairs.
It is concise, readable, and widely used.

new Object() Constructor:
Uses the Object constructor to create an object.
Properties and methods are added dynamically after creation.
*/

//how can we call symbols inside the object {interview Questions}
// start with declaraing symboll
const symbolKey = Symbol("uniqueKey");


//Object Literal way --> Non-Singleton Object
const JSuser = {
    Name: "Hitesh",
    Age: 18,
    location: "Mumbai",
    Email: "shaikhmohdsaud@gmail.com",
    isLoggedIn: false,
    lastLoggedinDays: ["Monday", "Saturday"],
    [symbolKey]: 55
}

//lets print the symbol
console.log(typeof JSuser[symbolKey]); //Output: number
/*
Note:

In JavaScript, a symbol is a unique key used in objects, and the value 
associated with that symbol can be of any type, like a string. When you access JSuser[symbolKey], 
it returns the value associated with the symbol, and using typeof checks the type of that value. 
If you want to check the type of the symbol itself, typeof symbolKey will return "symbol".
*/
//How to Access Objects
console.log(JSuser.Email); //Output: shaikhmohdsaud@gmail.com
console.log(JSuser["Email"]); //Output: shaikhmohdsaud@gmail.com
/*
Note:
In JavaScript, object keys are always stored as strings internally, 
even if you define them without quotes. When using bracket notation (e.g., JSuser["Email"]),
you can access properties with keys that contain special characters, spaces, or numbers,
which dot notation (JSuser.Email) can't handle. This flexibility allows for dynamic property access
and ensures that all keys are treated as strings, regardless of how they are written.
*/

//Overiding the objects value
JSuser.Email = "shaikhanwar2004@gmail.com"
//Object.freeze(JSuser)
//console.log(JSuser.Email); //Output: shaikhanwar2004@gmail.com
/*
Note:
Object.freeze(JSuser) in JavaScript makes the JSuser object immutable, 
meaning that its properties cannot be added, deleted, or modified. 
After using Object.freeze(), any attempt to change the object's properties will 
fail silently in strict mode or throw an error in non-strict mode. However, it only affects the 
object itself, not nested objects. To freeze nested objects, you need to recursively freeze them as well. 
This method is useful for ensuring that the object’s state remains constant throughout the application.
*/
JSuser.Email = "shaikhanwar2004@microsoft.com"
console.log(JSuser.Email); ////Output: shaikhanwar2004@gmail.com 
/* It wont get override as it been freezed */

// how can we add functions in objects
JSuser.greetings = function(){
    console.log("Hello JS User");
}

JSuser.greetingz = function(){
    console.log(`Hello JS User, ${this.Email}`); // this key word states you calling the part of same object
}

console.log(JSuser.greetingz());


console.log(JSuser.greetings);// Output: [Function (anonymous)]
/*
Reason:
The output console.log(JSuser.greetings); // Output: [Function (anonymous)] means that greetings
//  is a function defined in the JSuser object. When you access JSuser.greetings, JavaScript returns the
//  function itself, and the function is shown as [Function (anonymous)] because it doesn't have a name assigned
//  to it. If the function were named, the output would display the function's name instead.
*/
console.log(JSuser.greetings()); //Output: Hello JS User

//new Object() Constructor or singleton: --> Singleton Object
const InstagramUser = new Object()
InstagramUser.Id = "saudshaikkhh"
InstagramUser.name = "Saud"
InstagramUser.Isloggedin = false

console.log(InstagramUser); //Output: { Id: 'saudshaikkhh', name: 'Saud', Isloggedin: false }

const RegularUser = {
    email:"Shaikhmohdsaud2004@microsoft.com",
    fullname:{
        Userfullname:{
            firstname:"Mohammed Saud",
            lastname:"Shaikh"
        }
    }
}

console.log(RegularUser.fullname.Userfullname);

