/*A class is a blueprint/template for creating objects.
class → creates blueprint
constructor → initializes object
this → refers to current object
new → creates object/instance
method() → behavior/function of the object */

//we have 3 types of constructor- Default , Parameterized and Copy 

class Student {
  constructor(name, age) {              //Parametarized constructor
    this.name = name;
    this.age = age;
  }
  test() {
    console.log(this.name + " is studying");
  }
}
const p0 = new Student("Swati", 25); //we can't normally "call" a class like a function.we will create an object (instance) using new keyword to call a class
console.log(p0.name);               // Swati
console.log(p0.age);                // 25

//we can also create multiple objects
const p1 = new Student("Coco", 26);
const p2 = new Student("Ritu", 30);

console.log(p1.name);               // Coco
console.log(p1.age);                // 26
console.log(p2.name);               // Ritu
console.log(p2.age);                // 30

//An empty constructor is a constructor with no statements inside it
class Student {
  constructor() {           //Empty constructor
  }
}
const pp = new Student();

// assigning a class to a variable
const Person = class {
  constructor(name) {
    this.name = name;
  }
  newFunc() {
    console.log("Hello " + this.name);                  //Hello Swati
  }
};
const person = new Person("Swati");
person.newFunc();


//Class with No Constructor - JS provides a default constructor when we don't define one
//A default constructor is a constructor that does not take any parameters
class Student {
  constructor() {
    console.log("Student created");     //Student created
  }
}
const s1 = new Student();

//Copy constructor
// JS doesn't have a built-in copy constructor like languages such as C++ or Java.
// but we can create a constructor that copies values from another object.
class Person1 {
  constructor(person) {
    this.name = person.name;
    this.age = person.age;
  }
}
const first = {
  name: "Swati",
  age: 25
};
const second = new Person1(first);
console.log(second.name);                                               // Swati
console.log(second.age);                                                // 25

//Constructor overloading- it is not supported in JS, but we can craete multiple objects with different types of parameters
class Person2 {
  constructor(name = "Unknown", age = 0) {
    this.name = name;
    this.age = age;
  }
}
const f1 = new Person2();
const f2 = new Person2("Swati");
const f3 = new Person2("Swati", 25);
console.log(f1.name);                                               // Unknown
console.log(f1.age);                                                //0
console.log(f2.name);                                               // Swati
console.log(f2.age);                                                //0
console.log(f3.name);                                               // Swati
console.log(f3.age);                                                //25
