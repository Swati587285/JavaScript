/*In JavaScript, almost every value is truthy.
The main falsy values are:

false
0
-0
0n
""
null
undefined
NaN */


console.log("HI" && "test" && "File");      // when all conditions are truthy then it will return last truth value- file
console.log("test" && null && "");          // when we have multiple falsy condition then it will return 1st falsy value - null
console.log("New" || "File");               // all value are truthy- New
console.log("" || "new" || "hello" );       // multiple truthy values- new
console.log(0 || 100);                      // both values are falsy- 100
console.log(10 && 20);                      // both value are truthy- 20
console.log(null || "JavaScript");          // both values are truthy- JavaScript



if ("0") {
  console.log("A");         // "0" is string value , not a number so it prints A
} else {
  console.log("B");
}

if (NaN) {                  // NaN is falsy value - it prints B
  console.log("A");
} else {
  console.log("B");
}

const value = [];

if (value) {
  console.log("truthy");     // truthy - arrays are objects, and all objects are truthy
} else {
  console.log("falsy");
}
