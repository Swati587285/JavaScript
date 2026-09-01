//push() is used to add elements to the end of an array.
let arr = [10, 20, 30];
arr.push(40);
console.log(arr);          //[10, 20, 30, 40]


//pop() is used to remove the last element from an array
let arr1 = [10, 20, 30, 40];
arr1.pop();
console.log(arr1);          //[10, 20, 30]

//unshift() used to add element at the beining of an array
let arr2 = [20, 30, 40];
arr2.unshift(10);
console.log(arr2);              //[10, 20, 30, 40]

//shift() used to remove an element form the beigning
let arr3 = [10, 20, 30, 40];
arr3.shift();
console.log(arr3);              //[20, 30, 40]

//length() used to find the length of an array or to count an elements of an array
let arr4 = [10, 20, 30, 40];
console.log(arr4.length);           // 4

//includes()- check if an element is present inside an array or not
let arr5 = [10, 20, 30, 40];
console.log(arr5.includes(20));     //true
console.log(arr5.includes(50));     //false


//indexOf()- to check an index of an element within the array
let arr6 = [10, 20, 30, 40];
console.log(arr6.indexOf(30));          //2

//slice()- to get a part of an array
let arr7 = [10, 20, 30, 40, 50];
let result = arr7.slice(1, 4);
console.log(result);            //[20, 30, 40]

//splice()- to remove, add, or replace elements.
// add
let arr8 = [10, 20, 30, 40, 50];
arr8.splice(2, 1);
console.log(arr8);      //[10, 20, 40, 50]

//remove
let arr9 = [10, 20, 40, 50];
arr9.splice(2, 0, 30);
console.log(arr9);          //[10, 20, 30, 40, 50]


