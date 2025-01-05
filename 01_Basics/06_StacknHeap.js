//Stack
let myname = "shaikh mohammed Saud naeem"
let myname2 = myname
myname2 = "Shaikh Anwar"// if we dont override output:shaikh mohammed Saud naeem
console.log(myname2); // output:Shaikh Anwar

//Heap
let myobject = {
    gmail : "shaikhmohdSaud2004@gmail.com",
    UpiId : "xyz@sbi"
}

let myobject2 = myobject
myobject2.gmail = "Aanwarshaikh2004@gmail.com"
console.log(myobject);
console.log(myobject2);


// difference between heap and stack
/*
note:
Memory Allocation:

Stack stores primitives and references, using LIFO order.
Heap stores objects and dynamically allocated data.
Lifetime:

Stack memory is automatically cleared when a function ends.
Heap memory persists until no references are left.
Speed:

Stack is faster due to simpler allocation.
Heap is slower due to dynamic management.
Example:

Stack: let num = 10;
Heap: let obj = { name: "Alice" }; (object stored in heap)
*/