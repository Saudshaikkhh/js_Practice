const idcardnumber = 66895
let studentname = "Shaikh Mohammed Saud Naeem"
var Rollno = "35"
City = "mumbai" // we can declare the variable without declaring with keywords but this method is not goood
let country //usually gives you and undefined ouput as the value is not being defined

/*idcardnumber = 66   
console.log(idcardnumber); --> TypeError: Assignment to constant variable. 
Note-1: we cant override any const variable as it remains constant with the value which has been assigned
Note-2: We usually dont use var because block scope and functional Scope [{}] it get overides the value*/

studentname = "Shaikh Anwar"
Rollno = "56"
City = "Bengaluru"

console.table([studentname,Rollno,City,country])
