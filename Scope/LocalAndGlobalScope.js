//A variable which is declared inside a function is locally scoped variable
//A variable which is declared outside any function or block is globally scoped variable

var a = 10;                     //Global variable 
function test() {
    var a = 20;                 //local variable 
    console.log(a);             //20
}
test();                         //20
console.log(a);                 //10


function test1() {
  let message = "Hello";
  console.log(message);
}
test1();                        // Hello
console.log(message);           // ReferenceError


let Aname = "Swati";
function test2() {
  console.log(Aname);
}
test2();                          // Swati
console.log(Aname);               // Swati

//examples
function checkAge() {
  if (true) {
    let age = 25;
    console.log(age);                   //25
  }
    console.log(age);                   //ReferenceError- we can't access age outside the block
}
checkAge();

function checkAge() {
    let age =40
  if (age>30) {
    let age = 25;
    console.log(age);                   //25
  }
    console.log(age);                   //40
}
checkAge();


function test() {
    var a1 = 10;
    if (true) {
        var a1 = 20;
        console.log(a1);                         //20
    }
    console.log(a1);                             //20
}
test();


if (true) {
    var a = 10;
    let b= 20;          //let , we can't access outside the block
}
console.log(a);             //10
console.log(b);             //reference error
 

let x = 10;
function func1() {
    let y = 20;
    function func2() {
        let z = 30;
        console.log(x);             //10
        console.log(y);             //20
        console.log(z);             //30
    }
    func2();
}
func1();

 
