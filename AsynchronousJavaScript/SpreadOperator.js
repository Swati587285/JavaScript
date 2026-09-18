/*spread operator is written as:
... 
used to expand/unpack the elements of an array,
object, or other iterable into individual elements*/

//Spread with array
const numbers = [10, 20, 30];
console.log(...numbers);                    //10 20 30

//Copy an Array
const numbers1 = [10, 20, 30];
const copy = [...numbers1];                 //[ 10, 20, 30 ]
console.log(copy);

//Combine Arrays
const arr1 = [10, 20, 30];
const arr2 = [40, 50, 60];
const result = [...arr1, ...arr2];              //[ 10, 20, 30, 40, 50, 60 ]
console.log(result);

//Spread with Strings
const Aname = "Swati";
const letters = [...Aname];
console.log(letters);                       //[ 'S', 'w', 'a', 't', 'i' ]
console.log(...Aname);                      //S w a t i

//Spread with Objects
const Stud = {
  name: "Swati",
  age: 25
};
const testCopy = {
  ...Stud
};
console.log(testCopy);                         //{ name: 'Swati', age: 25 }

//Combine Objects
const Student = {
  name: "Swati"
};
const details = {
  age: 25,
};
const res = {
  ...Student,
  ...details
};
console.log(res);                                   //{ name: 'Swati', age: 25 }

//Update an Object
const person = {
  name: "Swati",
  age: 25
};
const updatedDetails = {
  ...person,
  age: 26
};
console.log(updatedDetails);                        //{ name: 'Swati', age: 26 }

//Spread in Function Arguments
const num = [10, 20, 30];
const add = (a, b, c) => {
  return a + b + c;
};
const resul = add(...num);
console.log(resul);                                 //60


// rest operator uses the same ... syntax as spread, but its job is different
//Rest collects multiple values into a single array
const adds = (...numbers) => {
  console.log(numbers);               //[ 10, 20, 30, 40 ]
};
adds(10, 20, 30, 40);   

//rest with multiple parameters
const student = (name, age, ...subjects) => {
  console.log(name);
  console.log(age);
  console.log(subjects);
};
student("Swati", 25, "JavaScript", "Java", "Python");
/*Swati
25
[ 'JavaScript', 'Java', 'Python' ]*/
