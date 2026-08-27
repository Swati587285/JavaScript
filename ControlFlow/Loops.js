//for loop 
for (let i = 1; i <= 5; i++) {
  console.log(i);       // 1 2 3 4 5 
}

//example 1 print 5 to 1
for (let i = 5; i >= 1; i--) {
    console.log(i);         // 5 4 3 2 1
}

//example2 even numbers between 2 to 10
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);    //  2 4 6 8 10
    }
}

//example3 print odd numbers between 1-10
for (let i = 1; i <= 10; i++) {
    if (i % 2 !== 0) {
        console.log(i);       // 1 3 5 7 9 
    }
}

//example4 sum of 1-5
let sum = 0;

for (let i = 1; i <= 5; i++) {
    sum = sum + i;
}
console.log(sum);     // 1+2+3+4+5 = 15

//example5 find larget numbers 
let numbers = [10, 45, 2, 89, 34, 67];
let largest = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
        largest = numbers[i];
    }
}
console.log(largest);     // 89

//example6 count even number in an array
let array1 = [10, 5, 24, 6, 3, 8, 9];
let cnt = 0;
for (let i = 0; i < array1.length; i++) {
    if (array1[i] % 2 === 0) {
        cnt++;
    }
}
console.log(cnt);     // 10 24 6 8= 4 even count

//example7 count odd number in an array
let array2 = [10, 5, 24, 6, 3, 8, 9];
let count = 0;
for (let i = 0; i < array2.length; i++) {
    if (array2[i] % 2 !== 0) {
        count++;
    }
}
console.log(count);     // 5 3 9 = 3odd count


//while loop            // check the condition first 
let i = 1;

while (i <= 5) {
  console.log(i);
  i++;
}

//do while loop    // run first check the condition later
let n = 1;

do {
  console.log(n);
  n++;
} while (n <= 5);


//for- of loop                   // used to fetch values from array/string
// from array
let colors = ["red", "yellow", "blue"];

for (let color of colors) {
  console.log(color);               // it will print array one by one 
}

//from string
let name = "Swati";

for (let letter of name) {
  console.log(letter);              // it will print letter of the string
}

//for- in loop              // used to fetch values from Objects
let student = {
  name: "Candy",
  class: 10,
  city: "Delhi"
};

for (let val in student) {
  console.log(val);                                 // it will show the key only
}

for (let val in student) {
  console.log(student[val]);                        // it will show the value only
}

for (let val in student) {
  console.log(val + " : " + student[val]);           // it will show the key and value both
}