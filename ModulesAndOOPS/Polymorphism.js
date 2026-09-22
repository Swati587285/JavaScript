//the same method name can behave differently depending on the object

//Method Overriding: A child class overrides a method of its parent class
class Fruits {
  Ftype() {
    console.log("1st fruit: Apple");
  }
}

class child1 extends Fruits {
  Ftype() {
    console.log("2nd fruit: Mango");
  }
}

class child2 extends Fruits {
    Ftype() {
    console.log("3rd fruit: Lichi");
  }
}

const obj = new child1();
const obj1 = new child2();
obj.Ftype();
obj1.Ftype();

//Example2
class Number {
  calculate(a, b) {
    console.log(a + b);
  }
}
class Multiply extends Number {
  calculate(a, b) {
    console.log(a * b);
  }
}

let n = new Multiply();
n.calculate(10, 5);                 //50


//Method Overloading (simulated): A function behaves differently based on the number or type of its arguments
//JS doesn't support method overloading.But if we define the same method twice, the last definition replaces the first
class Student {
  info(name, age = "unknown") {
    console.log(`My name is ${name} and my age is ${age}`);
  }
}
let s = new Student();
s.info("Swati");            //My name is Swati and my age is unknown
s.info("Swati", 25);        //My name is Swati and my age is 25

//Example2
class sum {
    add(a, b, c) {
        if (b === undefined) {
            return a ; 
        }else if (c === undefined){
            return a + b; 
        }
        return a + b + c ;
    }
}
const res = new sum();
console.log(res.add(2));                //2
console.log(res.add(2, 3));             //5
console.log(res.add(2, 3, 4));          //9
