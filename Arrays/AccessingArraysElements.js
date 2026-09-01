let Number = ["One", "Two", "Three", "Four"];

console.log(Number[0]);         //One
console.log(Number[1]);         //Two
console.log(Number[2]);         //Three
console.log(Number[3]);         //Four



//acessing elements using array
let numbers = [10, 20, 30, 40, 50];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);                    // 10 20 30 40 50
}


//Using .length function {.length used to access the element from the end of the array}
let Flower = ["Rose", "Jasmine", "Lily", "Lotus"];
console.log(Flower[Flower.length - 2]);         // Lily

// Find the sum of the array
let arr = [10, 20, 30, 40, 50];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
}
console.log("Sum =", sum);          // Sum = 150

//Find largest number 
let arr1 = [10, 50, 20, 80, 30];

let largest = arr1[0];

for (let i = 1; i < arr1.length; i++) {
    if (arr1[i] > largest) {
        largest = arr[i];
    }
}
console.log("Largest =", largest);          //Largest = 80

//Find Smallest Number
let arr2 = [10, 50, 20, 80, 30];

let smallest = arr2[0];

for (let i = 1; i < arr2.length; i++) {
    if (arr2[i] < smallest) {
        smallest = arr[i];
    }
}
console.log("Smallest =", smallest);            //10

//check -1 array question
//Print only even number
let arr3 = [10, 15, 22, 33, 40, 55];

for (let i = 0; i < arr3.length; i++) {
    if (arr3[i] % 2 === 0) {
        console.log(arr3[i]);           // 10 22 40
    }
}


//Find on odd number
let arr4 = [10, 15, 22, 33, 40, 55];

for (let i = 0; i < arr4.length; i++) {
    if (arr4[i] % 2 !== 0) {
        console.log(arr4[i]);           // 15 33 55
    }
}


//Count even number
let arr5 = [10, 15, 22, 33, 40, 55];
let count = 0;
for (let i = 0; i < arr5.length; i++) {
    if (arr5[i] % 2 === 0) {
        count++;
    }
}
console.log("Even numbers count is =", count);           //Even number count is  = 3  ie. 10 22 40


//Reverse an array 
let arr6 = [10, 20, 30, 40, 50];

for (let i = arr6.length - 1; i >= 0; i--) {
    console.log(arr6[i]);           // 50 40 30 20 10
}


//Accessing array element using -ve index
constcolors = ['red', 'yellow', 'green']; 
console.log(colors.at(-1));          //  'green'
console.log(colors.at(-2));         //  'yellow'
console.log(colors[-1]);            // undefined          we can't directly pass the index values in js