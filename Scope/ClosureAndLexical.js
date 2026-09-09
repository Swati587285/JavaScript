//inner functions can access variables from their outer functions
//Lexical Scope-Function can access outer variables
//Closure -Function remembers those variables


function mainfunc() {
    let name = "Swati";
    function subfunc() {
        console.log(name);          //Swati
    }
    subfunc();
}
mainfunc();

//Example2
let x = 10;
function test() {
    let y = 20;
    console.log(x);             // 10
    console.log(y);             // 20
}
test();
console.log(y);                 // ReferenceError, y is not defined

//Lexical + closure
function main() {
    let a = 10;
    return function sub() {
        a++;
        console.log(a);
    };
}
const result = main();
result();                       // 11
result();                       // 12


//Example3
let a = 10;
function test() {
    let b = 20;
    function child() {
        let c = 30;
        console.log(a);                 // 10
        console.log(b);                 // 20
        console.log(c);                 // 30
    }
    child();
}
test();
console.log(b);                         //ReferenceError: b is not defined