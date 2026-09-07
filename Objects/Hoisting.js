//Hoisiting -  declarations are processed before the code is executed
// var hoisting
console.log(x);         //undefined 
var x = 10;
//var is hoisted, but its value is not hosted
var x;
console.log(x);             //10


// let and const hoisting
console.log(a);             //ReferenceError: Cannot access 'a' before initialization
let a = 10;
 
console.log(b);             //ReferenceError: Cannot access 'b' before initialization
const b = 20;


// Function hoisting
test();
function test() {
  console.log("Hii");               ///Hii
}

//Function expression
test1();
var test1 = function () {
    console.log("Hello");           
};
test1();                //TypeError: test1 is not a function

//scoping