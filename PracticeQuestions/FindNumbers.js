//Check even of odd
function checkNum(num) {
  if (num % 2 === 0) {
    return "Even number";
  } else {
    return "Odd number";
  }
}
console.log(checkNum(20));          //Even number


//Find Largest of 3 Numbers
function largeNum(val1, val2, val3) {
  if (val1 >= val2 && val1 >= val3) {
    return val1;
  } else if (val2 >= val1 && val2 >= val3) {
    return val2;
  } else {
    return val3;
  }
}
console.log(largeNum(10, 25, 15));          //25


//Print Numbers 1–10
function printNum() {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
}
printNum();


//Print Array Elements
function printArr(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }                                                              
}
printArr(["red", "yellow", "blue"]);       
// red
// yellow
// blue     


//Sum of Array
function arraySum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }

  return sum;
}
console.log(arraySum([10, 20, 30]));            //60


//Count Even Numbers
function countEven(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      count++;
    }
  }
  return count;
}
console.log(countEven([3,4,2,9]));          //2


//Find Largest Number in Array
function findLargest(arr) {
  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}
console.log(findLargest([10,20,40,9,13]));              //40


//Find palindrome number
let num1 = 121;
let str1 = num1.toString();
let reverse1 = "";
for (let i = str1.length - 1; i >= 0; i--) {
    reverse1 += str1[i];
}
if (str1 === reverse1) {
    console.log("Palindrome number");       //Palindrome number
} else {
    console.log("Not a Palindrome number");       
}


//Find factorial number
let num2 = 5;
let fact = 1;

for (let i = 1; i <= num2; i++) {
    fact = fact * i;
}
console.log(fact);          //120


// Find fibonacci series
let n = 5;
let a = 0;
let b = 1;
for (let i = 1; i <= n; i++) {
    console.log(a);
    let c = a + b;
    a = b;
    b = c;
}
/*
0
1
1
2
3
*/


// String manipulation
//Reverse string
let str2 = "Hello There!";
let reverse = "";
for (let i = str2.length - 1; i >= 0; i--) {
    reverse += str2[i];
}
console.log(reverse);       //!erehT olleH


//Count Characters
let str = "Hi test";
let count = 0;
for (let i = 0; i < str.length; i++) {
    count++;
}
console.log(count);         //7, space will be count as 1 char


