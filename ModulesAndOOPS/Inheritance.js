//this() - Access the property of the current object
//super()- Access something from the parent class/prototype
//this cannot be used before super()

class Vehicle {       //Single inheritance
  vtype() {
    console.log("Vehicle type is car");
  }
}

class Car extends Vehicle {
  vcolor() {
    console.log("Car color is blue");
  }
}

const car = new Car();
car.vtype();                // Vehicle type is car
car.vcolor();               // Car color is blue


//super -refers to the parent class, accessing parent method
class Vehicle1 {
  vtype() {
    console.log("Vehicle type is car");
  }
}

class Car1 extends Vehicle1 {
    vcolor() {
    super.vtype();
    console.log("Car color is blue");
  }
}

const car1 = new Car1();        //Vehicle type is car
car1.vcolor();                  // Car color is blue


class Animal {        //Multilevel inheritance
  eat() {
    console.log("Eating");
  }
}
class Dog extends Animal {
  bark() {
    console.log("Barking");
  }
}
class Puppy extends Dog {
  play() {
    console.log("Playing");
  }
}
const p = new Puppy();
p.eat();              // Eating
p.bark();             // Barking
p.play();             // Playing


class Animal0 {                  //Hierarchical Inheritance
  eat() {
    console.log("Animal eats");
  }
}
class Dog0 extends Animal0 {
  bark() {
    console.log("Dog barks");
  }
}
class Cat0 extends Animal0 {
  meow() {
    console.log("Cat meows");
  }
}

const dog0 = new Dog0();
dog0.eat();
dog0.bark();
const cat0 = new Cat0();
cat0.eat();
cat0.meow();

/*Animal eats
Dog barks
Animal eats
Cat meows */


//Multiple Inheritance - Not supported in JS


