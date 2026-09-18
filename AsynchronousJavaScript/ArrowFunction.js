//An arrow function is a shorter way to write a function
//With parameter
const test = (name) => {
  return "Hello " + name;
};
console.log(test("Swati"));             //Hello Swati


//Without parameter
const test1 = () => {
  console.log("Hello");                 //Hello
};
test1();


//Multiple parameter
const multiply = (a, b) => a * b;
console.log(multiply(5, 4));            //20


//With array
const numbers = [1, 2, 3, 4, 5];
const result = numbers.map(num => num + 2);       //map() - goes through each element, take each item → transform it → get a new array.
console.log(result);                               //[ 3, 4, 5, 6, 7 ]


//With array -Example 2
const names = ["swati", "coco", "candy"];
const upperNames = names.map(name => name.toUpperCase());
console.log(upperNames);              //[ 'SWATI', 'COCO', 'CANDY' ]


//Using find - find() returns the first matching element.
const num = [15, 50, 90, 300];
const res = num.find(num => num > 20);
console.log(res);             //50

//Using filter - filter() returns elements that satisfy a condition.
const num1 = [10, 20, 40, 9, 21];
const res1 = num1.filter(num => num > 20);
console.log(res1);          //[ 40, 21 ]

//Using some- it will return if any conditon satifies , else return false
const num2 = [10, 20, 35, 40];
const res2 = num2.some(num => num > 30);
console.log(res2);          //true

//Example2
const num3 = [5, 2, 6, 40];
const res3 = num3.some(num => num > 30);
console.log(res3);          //true

//Using every - it will retun true when all elements satisfy the condition
const num4 = [10, 20, 30, 40];
const res4 = num4.every(num => num > 5);
console.log(res4);            //true

//Example2
const num5 = [5, 2, 6, 40];
const res5 = num5.every(num => num > 5);
console.log(res5);            //false


//Arrow function inside a for loop
const sum = num => num + num;
for (let i = 1; i <= 5; i++) {
    console.log(sum(i));
}

/* 2
4
6
8
10 */

//Arrow function returning an object 
const Stud2 = () => ({
    name: "Swati",
    age: 22
});
console.log(Stud2());       //{ name: 'Swati', age: 22 }

//Example2
const Stud3 = () => ({
    name: "Swati",
    age: 22
});
console.log(Stud3().name);       //Swati


//Multifying 2 numbers
const mul = async (a, b) => {
  return a * b;
};
const res0 = await mul(5, 6);
console.log(res0);                          // 30

//Check number is even or not 
const checkEven = async (num) => {      //internally ......return Promise
  return num % 2 === 0;
};
const res6 = await checkEven(10);
console.log(res6);                          // true

//Find cube of a number
const cube = async (num) => {
  return num * num * num;
};
const res7 = await cube(3);
console.log(res7);                            // 27

//Find factorial
const factorial = async (num) => {
  let res8 = 1;
  for (let i = 1; i <= num; i++) {
    res8 = res8 * i;
  }
  return res8;
};
const res8 = await factorial(5);
console.log(res8);                              // 120

//With multiple awaits
const add = async (a, b) => {
  return a + b;
};
const sub = async (a, b) => {
  return a - b;
};
const calculate = async () => {
  const sum = await add(10, 20);
  const result = await sub(sum, 5);
  console.log(result);
};
calculate();                                        // 25

//With setTimeout
const divide = async (num) => {
  await new Promise(resolve => setTimeout(resolve, 5000));
  return num / 2;
};
const res9 = await divide(10);        //await waits for the function's Promise to finish and puts the returned value into res9
console.log(res9);                              // 5

/*arrow functions do not have their own this. They take this from the surrounding scope */

//Normal function and using this
const person = {
  name: "Swati",
  AName: function () {
    console.log(this.name);           //Swati  - this refers to person
  }
};
person.AName();

const person1 = {
  name: "Swati",
  AName: () => {
    console.log(this.name);           //undefined  - arrow function doesn't create its own this
  }
};
person1.AName();

//
const person2 = {
  name: "Swati",
  test() {
    const message = () => {
      console.log("Hello " + this.name);          //Hello Swati
    };
    message();
  }
};
person2.test();

//this using arrow and aysnc
const stud = {
  name: "Swati",
  AName: async function () {
    const result = () => {
      console.log(this.name);               //After 3 sec it will print Swati
    };
    await new Promise(resolve => setTimeout(resolve, 3000));
    result();
  }
};
stud.AName();