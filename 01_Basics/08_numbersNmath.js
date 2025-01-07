//ways to declare number variable

//1 way:
const score = 500
console.log(score); // Output:500


//2 way:
const score2 = new Number(500)
console.log(score2); // Output:[Number: 500] it actually specifies the value that it is number type.


//Some number funtions
console.log("\n");
console.log("Number Functions:");
let randnum = 566.888443536451653
console.log(randnum.toPrecision(4)); //decimal round according to the precision.
console.log(score.toString())
console.log(score2.toFixed(2)); // mostly prefer 2 

//math functions
console.log("\n");
console.log("Math Functions:");
console.log(Math);
console.log(Math.abs(-7)); //Output: -7
console.log(Math.round(5.8)); //Output: 6
console.log(Math.ceil(4.2)); //Output: 5 even if the value greater than 4 it will choose the other number
console.log(Math.floor(4.9)); //Output: 4 no matter how much the value if until its .9 it will take the lower value before the point
console.log(Math.min(10,22,82,61,55));
console.log(Math.max(10,22,82,61,55));// we usually use this fun in Math
console.log(Math.random()); // it will give you random number from between 0 to 1
console.log((Math.random()*10)+1);// this will give you value between 1-5


//Suppose you want a value between a Specific Range

let min = 10
let max = 50
console.log(Math.floor((Math.random()*(max-min +1))+min)); // this is the formula








