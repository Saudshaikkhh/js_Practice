console.log("Condition 1:");
let ExampleNum = 33
//console.log(ExampleNum) // output:33
console.log( +ExampleNum + "'s Datatype is " + typeof ExampleNum); //checked the datatypes and its number 

let ChangeToString = String(ExampleNum) //Change datatype to String
console.log("Changed to " + typeof ChangeToString + " and the Ouput is " + ChangeToString)
//Output:Changed to string and the Ouput is 33

let ChangeToBoolean = Boolean(ExampleNum) //Change datatype to Boolean
console.log("Changed to " + typeof ChangeToBoolean + " and the Ouput is " + ChangeToBoolean) 
//Output:Changed to boolean and the Ouput is true
/*
Note-1:
if a datatype is " " or 0 than the Boolean result gonna be False;
and if the datatype is "saud", 55, 1 than the result gonna be True
*/
console.log("\n");


console.log("Condition 2:");
//Now lets take a different example
let ExampleNum2 = "55abc" // if the value assign contains only number (i.e. 55) than the string generated is 55
console.log( +ExampleNum2 + "'s Datatype is " + typeof ExampleNum2);
let ChangeToNumber = Number(ExampleNum2) // it will show output NaN(Not an Number) Error in javacript
let ChangeToBoolean2 = Boolean(ExampleNum2)
console.log("Changed to " + typeof ChangeToNumber + " and the Ouput is " + ChangeToNumber)
console.log("Changed to " + typeof ChangeToBoolean2 + " and the Ouput is " + ChangeToBoolean2)


console.log("\n");


console.log("Condition 3:");
//Now lets take a different example
let ExampleNum3 = null //it gives 0 as an number
console.log( +ExampleNum3 + "'s Datatype is " + typeof ExampleNum3);
let ChangeToNumber3 = Number(ExampleNum3) // it will show output NaN(Not an Number) Error in javacript
let ChangeToBoolean3 = Boolean(ExampleNum3)
let ChangeToString2 = String(ExampleNum3)
console.log("Changed to " + typeof ChangeToNumber3 + " and the Ouput is " + ChangeToNumber3)
console.log("Changed to " + typeof ChangeToBoolean3 + " and the Ouput is " + ChangeToBoolean3)
console.log("Changed to " + typeof ChangeToString2 + " and the Ouput is " + ChangeToString2)