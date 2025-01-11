//Array

const myArr = [0, 1, 2, 3, 4, 5] // declare type-1
const heroes = ["Ironman", "Spiderman", "Hulk", "Ghostrider"]
const myarr2 = new Array(1, 2, 3, 4, 5) // declare type-2

// // console.log(myArr);
// console.log(myarr2);


//Array Method
myArr.push(6) //add element

myArr.pop(6)  //remove element  

myArr.unshift(6) // add element at first

myArr.shift() // removes it

console.log(myArr.includes(9)); //Output: false
console.log(myArr.indexOf(4)); //Output: 4
console.log(myArr.join()); //Output: 0,1,2,3,4,5 //Converted into Strings
console.log(myArr); //Output: [ 0, 1, 2, 3, 4, 5 ]

// SLice and Splice
console.log(myArr);
const myrr = myArr.slice(1,3)
console.log(myrr);
console.log(myArr.splice(1,3));
console.log(myArr);

/*
Note:
Modification:
slice does not modify the original array; it returns a new array.
splice modifies the original array by adding or removing elements.

Purpose:
slice extracts a portion of the array.
splice adds, removes, or replaces elements in the array.

Parameters:
slice(start, end): Extracts elements from start to end (not inclusive).
splice(start, deleteCount, ...items): Starts at start, removes deleteCount elements, and optionally adds ...items.
*/

// combining two arrays

const marvelhero = ["hulk", "ironman","spiderman"]
const dchero = ["flash", "superman", "batman"]

//marvelhero.push(dchero)
//console.log(marvelhero); //Output: [ 'hulk', 'ironman', 'spiderman', [ 'flash', 'superman', 'batman' ] ]
//console.log(marvelhero[3][2]) //Output: batman

const allhero = marvelhero.concat(dchero)
console.log(allhero);//Output: [ 'hulk', 'ironman', 'spiderman', 'flash', 'superman', 'batman' ]
// the above approach has limitation only two array can merge together at a time

const heroall = [...marvelhero, ...dchero] // another approach to merge the array without any limitations
console.log(heroall); //[ 'hulk', 'ironman', 'spiderman', 'flash', 'superman', 'batman' ]

//multiples array removal

const mullarray = [1, 2, 3, 2,[5, 5, 5, 5,[8, 8, 8, 8],5],55]

const allmularr = mullarray.flat(Infinity)
console.log(allmularr); //Output : [
//     1,  2, 3, 2, 5, 5,
//     5,  5, 8, 8, 8, 8,
//     5, 55
//   ]

//we can the array
console.log(Array.isArray(allmularr)); //Output: true
console.log(Array.from("Saud")); //Output: [ 'S', 'a', 'u', 'd' ]
console.log(Array.from({name:"Saud"})); //Output: [] // reason object cant be converted into array

// we can a array full of var
let n1 = 100
let n2 = 200
let n3 = 300 
console.log(Array.of(n1,n2,n3)); //Output: [ 100, 200, 300 ]


