//Comparision Operator
console.log("Normal comparison");
console.log(2 > 1); //Output:true
console.log(2 >= 1);//Output:true
console.log(2 < 1); //Output:False
console.log(2 <= 1);//Output:False
console.log(2 == 1);//Output:False
console.log(2 != 1);//Output:true

console.log("\n");

console.log("Little Complex Comparision");
console.log("2" > 1); //Output:true
console.log("02" > 1);//Output:true
/* 
Note-1:
In JavaScript, when comparing a string with a number, the string 
is converted to a number. In both cases, "2" and "02" are coerced("automatically changed from one type to another") 
into the number 2, and since 2 > 1, the output is true.
*/
console.log("\n");

console.log("null Comparision");
console.log(null > 1); //Output:False
console.log(null < 1); //Output:true
console.log(null >= 1);//Output:False
console.log(null <= 1);//Output:true
console.log(null == undefined); //Output:true
console.log(null == 0); //Output:false
/*
Note-2:
1)  In JavaScript, when using comparison operators (>, <, >=, <=), null is converted to 0,
    so comparisons like null > 1 and null < 1 are evaluated based on 0. However, the equality 
    operator (==) does not convert null and only checks for loose equality, meaning null == 1 
    is false because null is only loosely equal to undefined.

2)  In JavaScript, 0 is a defined numeric value representing zero, while undefined represents 
    the absence of a value. 0 is a specific number and has the type "number," whereas undefined is 
    a special value indicating that a variable has not been assigned a value. When comparing null == 0, 
    avaScript returns false because null is only loosely equal to undefined, not to numbers like 0.
*/

console.log("\n");

console.log("Undefined Comparision");
console.log(undefined > 1); //Output:False
console.log(undefined < 1); //Output:False
console.log(undefined >= 1);//Output:False
console.log(undefined <= 1);//Output:False
console.log(undefined == 1); //Output:False
console.log(undefined == null); //Output:true
console.log(undefined == 0); //Output:false
/*
Note-2:
In JavaScript, undefined is not converted to a number for comparison, 
so any comparison like undefined > 1 or undefined < 1 results in false. 
The == operator only returns true when comparing undefined with null, 
as they are loosely equal, but not with other values like 0 or 1, 
which gives false. undefined is considered a distinct value from numbers, 
so undefined == 0 is also false.
*/

console.log("\n");

console.log("Strict Comparision");
console.log(1===1);
console.log(01 ===1);
console.log("1"===1);
console.log("01"===1);
/*
Note-3:
The === operator in JavaScript checks both the value and type for strict equality.
Leading zeros in numbers, like 01, do not change their value and are treated as 1,
so 01 === 1 is true. However, if there is a type mismatch,
such as comparing a string ("1") with a number (1), it returns false because they have different types, 
even though they represent the same value.
*/