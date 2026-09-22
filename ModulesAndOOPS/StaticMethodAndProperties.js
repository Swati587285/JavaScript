/*The static keyword is used when a method or property belongs to the class itself,
 rather than to objects (instances) created from that class*/
// Normal method/property → belongs to object
// Static method/property → belongs to class

//Static Method
class Person {
  static test() {                   // A static method is called using the class name
    console.log("Hello");
  }
}
Person.test();                      //Hello 

const p = new Person();             //we cannot call static method using an object
p.test();                           //TypeError: p.test is not a function

//Static Property
class Student {
  static Aname = "Swati";
}
console.log(Student.Aname);         // Swati

//Example2
class Flower {
  Fname = "Rose";
  static color = "Red";
  test() {
    console.log(this.Fname);
  }
  static info() {
    console.log("This is a Red Rose");
  }
}
const f0 = new Flower();
console.log(f0.Fname);                          // Rose
//console.log(f0.color);                        // undefined
console.log(Flower.color);                      // Red
f0.test();                                      // Rose
//f0.info();                                    //TypeError: f0.info is not a function
Flower.info();                                  // This is a Red Rose


//Static Method Can Use Static Properties
class Fruits {
  static Ftype = "Apple";
  static Fname() {
    console.log(Fruits.Ftype);                   //Apple
  }
}
Fruits.Fname();

//We can alos use this keyword inside static method
class Fruits1 {
  static Ftype1 = "Apple";
  static Fname1() {
    console.log(this.Ftype1);                   //Apple
  }
}
Fruits1.Fname1();

//Static Methods and super- Static methods can also use super when working with inheritance
class Parent {
  static test() {
    console.log("Hello from Parent");
  }
}

class Child extends Parent {
  static test() {
    super.test();                           //Hello from Parent
    console.log("Hello from Child");        //Hello from Child
  }
}

Child.test();
