//String to number-Number() - converts a string into a number
let a = "20";
let b = Number(a);
console.log(b);                 // 20
console.log(typeof b);          // "number"

//parseInt()- converts to an integer
let e = "200";
let c=parseInt(e);               // 200
console.log(c);

let e1 = "200.50";
let c1=parseInt(e1);             // 200
console.log(c1);

//parseFloat()-converts to a decimal number
let a1 = "200.60";
let res=parseFloat(a1);             // 200.6
console.log(res);

//Converting Numbers to Strings- String()
//String() can handle null and undefined values , but toString() can't
let val = 100;
let str = String(val);
console.log(str);                   // "100"
console.log(typeof str);

//.toString()
let num = 100;
console.log(num.toString()); // "100"

//Converting a String to an Array - split()
let str1 = "test";
let arr = str1.split("");
console.log(arr);               //[ 't', 'e', 's', 't' ]

//Converting an Array to a String- join()
let arr1 = ["Red", "Yellow", "Green"];
let str0 = arr1.join(" ");
console.log(str0);                   //Red Yellow Green

// "+" : used for concatination. String + anything → String
let x = "10";
let y = 20;
console.log(x + y);         //1020

//"-" convert strings into numbers.
let n = "20";
let m = 2;
console.log(n - m);         //18


