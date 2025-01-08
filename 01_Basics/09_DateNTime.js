//dates
let myDate = new Date()
console.log(myDate.toString()); //Output: Wed Jan 08 2025 20:12:44 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()); //Output: Wed Jan 08 2025
console.log(myDate.toISOString()); //Output: 2025-01-08T14:43:41.920Z
console.log(myDate.toJSON()); //Output: 2025-01-08T14:44:13.855Z
console.log(myDate.toLocaleString());
console.log(typeof myDate); //Output: object

//Declaring date
let myOwnDate = new Date(2004, 6, 14) //here date number starts with 0 stands for january.
console.log(myOwnDate.toDateString()); //Output: Wed Jul 14 2004

//you can give more value in the date parameter below is one of the examples 
let myOwnDate1 = new Date(2004, 6, 14, 5, 3)
console.log(myOwnDate1.toLocaleString()); //Output: 14/7/2004, 5:03:00 am
/*
Note:
Date(you can your desired date)
*/

//another Way
let myOwnDate2 = new Date("7-14-2004") 
console.log(myOwnDate2.toLocaleString()); //Output: 14/7/2004, 12:00:00 am

//for time
let timestamp = Date.now()
console.log(timestamp); //Output: 1736348920356 it will give time in miliseconds from January 1, 1970 till now read the mdn document
//to get todays time 
console.log(Math.floor(Date.now()/1000)); //OUtput: 1736349087


//to get days,month etc
let newdate = new Date()
console.log(newdate.getDate()); // as today 8th day Output: 8
console.log(newdate.getMonth()); // as jan starts from 0 in js Output: 0
console.log(newdate.getFullYear()); // Output: 2025




