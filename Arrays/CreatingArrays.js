/*let numbers = [1, 2, 3, 4, 5];
let names = ["Red", "Yellow", "Green"];
let arr  = [];          //empty array


//new array
console.log(numbers[2]);        // it will print 2 
console.log(names[0]);          // it will print Red
console.log(arr);               // it will print empty array as []
//console.log(arr[]);             // it will show error

//using new
let arr1 = new Array();
console.log(arr1);               // it will create empty array as: []

let arr2 = new Array(2, 3, 4);
console.log(arr2);                // [2, 3, 4]
*/

//User input 
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter numbers separated by comma: ", function(input) {
    let arr = input.split(",").map(Number);
    console.log("Array:", arr);
    rl.close();
});

//output : Enter numbers separated by comma: 2,3,4,5
//Array: [ 2, 3, 4, 5 ]