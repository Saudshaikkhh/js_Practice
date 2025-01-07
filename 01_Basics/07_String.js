//new way for printing statement
let name = "Saud";
let roll_no = 56;
//console.log(`My name is ${name} and roll no is ${roll_no}`); //Note:must be wrapped in backticks (`)

const selfmade = new String("No matter how much you knock to the someones heart in the end you cant change them")//another way for declaraing String

//Questions for Strings to learn Strings

let GivenString = "Hello, World!  "

//Given the string "Hello, World!", how would you find its length?
console.log(GivenString.length) //Output:15

//Extract the substring "World" from the string "Hello, World!" using the starting and ending index.
console.log(GivenString.substring(7,12)); //Output: World

//How would you replace "JavaScript" with "Python" in the string "I love JavaScript!"?
let Sen = "I love JavaScript!"
console.log(Sen.replace("JavaScript","Python"));

//How would you remove the extra spaces from both sides of the string " Hello, Web Developer! "?
let sen2 = " Hello, Web Developer! "
console.log(sen2.trim());

//Convert the string "hello" to uppercase.
console.log(sen2.toUpperCase())

//Given the string "Web development is awesome", how would you check if it starts with "Web" and ends with "awesome"?
let sen3 = "Web development is awesome"
console.log(sen3.startsWith("Web")); // case sensitive
console.log(sen3.endsWith("awesome"));

//How would you count how many times the letter "o" appears in the string "Hello, World!"?
console.log(GivenString.split("o").length - 1)
/*
Note:
split("o") splits the string at every "o" and returns an array of segments.
The length of the resulting array gives the total number of parts,
and by subtracting 1, you get the count of how many times "o" appears in the string.
*/

//Given the string "apple,banana,orange", split it into an array where each item is a fruit.
let st = "apple,banana,orange"
console.log(st.split(",",3));


//How would you repeat the string "Code" 3 times to get "CodeCodeCode"?
let st2 = "code"
console.log(st2.repeat(3));




