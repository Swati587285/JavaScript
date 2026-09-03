//Using single quote
let str = 'Hello';      
console.log(str);       //Hello

//Using double quote
let str1 = "Hello";      
console.log(str1);       //Hello

//Using template literals
let str2 = `Hello`;      
console.log(str2);       //Hello

//Using variable
let Fname = "Swati";
let str3 = `Hello ${Fname}`;
console.log(str3);          //[String: 'Hello']

//Using toString()
let num = 100;
let str4 = num.toString();
console.log(str4); // "100"

//Concatination
let Aname = "HI";
let Lname = "SWATI"
let str5 = Aname + " " + Lname;
console.log(str5); // "HI SWATI"

//Using new String
let str6 = new String("Hello");
console.log(str6);          //[String: 'Hello']

let val1 = "Hello";
let val2 = new String("Hello");
console.log(val1 === val2);       //false because === compares both type and value: val1 is primitive string and val2 is object