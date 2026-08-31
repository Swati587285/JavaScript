//To check even number
function evenNum(num) {
    if (num % 2 === 0) {
        return "number is Even";
    } else {
        return "number is Odd";
    }
}
let number = 4;
console.log(number + " " + evenNum(number));         // 4 number is Even


//To find largest number
function largeNum(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

console.log(largeNum(10, 25));              // 25

//To find factorial of n number
function factorial(n) {
    let fact = 1;

    for (let i = 1; i <= n; i++) {
        fact = fact * i;            // 5! = 5 × 4 × 3 × 2 × 1 = 120
    }

    return fact;
}

console.log(factorial(5));          // 120


//To check wheather a number is positive or negative or zero
function checkNum(num) {
    if (num > 0) {
        return "Positive number";
    } else if (num < 0) {
        return "Negative number";
    } else {
        return "Zero number";
    }
}

console.log(checkNum(7));               // Positive number


//Find sum of number from 1 to 10
function sum(n) {
    let total = 0;

    for (let i = 1; i <= n; i++) {
        total += i;         //total= total+i  
    }
    return total;
}
console.log(sum(10));           // 1+2+3+4+5+6+7+8+9+10 = 55


//Find largest number in an array
function largeNum(arr) {
    let large = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > large) {
            large = arr[i];
        }
    }
    return large;
}
console.log(largeNum([10, 25, 7, 40, 15]));         //40

