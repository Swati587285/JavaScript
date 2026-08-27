//if statement
let a=10;
if( a==10) {
    console.log(a + " is even number");     //   10 is even number
}

//if-else statement
let b=5;
if( b==10) {
    console.log(b + " is even number");     //   10 is even number
} 
else {
    console.log(b + " is an odd number");      //   10 is odd number
}

//if-else if-else
let a1=50;
let a2=60;
if ( a1 > a2) {
    console.log(a1 + " is greater than " + a2);     //   10 is even number
} 
else if (a1 < a2) {
    console.log(a1 + " is lesser than " + a2);      //  
}
else {
    console.log("Both are equals");
}

//Nested if-else

let m=5;
let n=6;
let l=10;
if( m==5) {
    if(n!=6) {
        console.log("value of n is" + n);
    }
    else {
        console.log("value of l is " + l);
    }
    console.log("value of m is " + m);    
} else {
    console.log("invalid number");
}


//Switch Statements
let color = 5;

switch (color) {
  case 1:
    console.log("Red");         
    break;
  case 2:
    console.log("Yellow");
    break;
  case 3:
    console.log("Green");
    break;
  case 4:
    console.log("Blue");
    break;
  case 5:
    console.log("Pink");
    break;
  default:
    console.log("Color not defined");
}


//Ternary ( ? : )
let test = 90;
let result = test >= 80 ? "Pass" : "Fail";
console.log(result);

//Ternary - example2
let amount = 1000;
let message = amount > 500 ? "Withdrawal successful" : "Insufficient Amount" ; 
console.log(message);


//Ternary - example3
let a = 100;
let b = 200;
let res = a >= 50 && b < 300 ? "Condition matched" : "Condition not matched" ; 
console.log(res);

//Ternary - example4
let a = 100;
let b = 200;
let res = a > 50 || b < 100 ? "Condition matched" : "Condition not matched" ; 
console.log(res);
