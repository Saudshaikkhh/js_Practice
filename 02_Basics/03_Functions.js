function sayname (){
    console.log("S");
    console.log("A");
    console.log("U");
    console.log("D"); 
}
sayname()
/*
Output:
S
A
U
D
*/

function Add (num1, num2){
    console.log("add this number");
    return num1+num2 // no code gonna run after return
}

console.log(Add(56,82)); //Output:138



function isLoggedInUser(Username){
    if(!Username){
        return "Please enter user name"
    }
    return `${Username} has logged in`
}
console.log(isLoggedInUser()); // Output: Please enter user name


// a new situation occurs
function flatprices(...num1){
    return num1
} 
console.log(flatprices(5000, 6000, 5000, 9000)); //Output: [ 5000, 6000, 5000, 9000 ]

//Objects with functions
const User = {
    UserAcName: "shaikh mohammed saud",
    price: 600
}
function HandleObject(anObject) {
    return `Username is ${anObject.UserAcName} and its price ${anObject.price}`
}
console.log(HandleObject(User));// 1st way
console.log(HandleObject({
    UserAcName: "shaikh anwar",
    price: 150
})); // 2nd way


//Array with Functions

const mynewArr = [500, 600, 3000, 500]
function Handlearr(anArray){
    return anArray[2]
}
console.log(mynewArr); //Output: [ 500, 600, 3000, 500 ]
