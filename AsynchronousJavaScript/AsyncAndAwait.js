/* Async function always returns a Promise.
Await waits for a Promise */

async function test() {
  return "Hello World";
}
test().then((result) => {                            //internally ......return Promise.resolve("Hello World");
  console.log(result);                              //Hello World
});


async function test1() {
  return Promise.reject("Something went wrong");
}
test1().catch((result) => {                            //return Promise.reject("Something went wrong");
  console.log(result);                              //Something went wrong
}
);


//Await does not block the entire code
async function f1() {
    console.log("Start");
    await new Promise(resolve => setTimeout(resolve, 3000));
    console.log("After 3 seconds");
}
f1();
console.log("End");
/* Start
End
After 3 seconds */ 


//Example
async function divide(a, b) {
  try {
    if (b === 0) {
      throw new Error("Cannot divide by zero");     //Error: Cannot divide by zero
    }
    return a / b;
  } catch (error) {
    console.log("Error:", error.message);
  }
}
async function main() {
  const result = await divide(10, 0);
  console.log(result);
}
main();


//Multiple awaits
function step1() {
    return Promise.resolve("Step 1 completed");
}
function step2() {
    return Promise.resolve("Step 2 completed");
}
async function test() {
    let result1 = await step1();
    console.log(result1);                    //Step 1 completed
    let result2 = await step2();
    console.log(result2);                    //Step 2 completed
}
test();


//Async without arrow 
async function add(a, b) {
  return a + b;
}
async function main() {
  const result = await add(10, 20);
  console.log(result);                // 30
}
main();


//Async arrow function
const addNumbers = async (a, b) => {
  return a + b;
};
const result = await addNumbers(10, 20);
console.log(result);                            //30
   