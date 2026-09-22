//Encapsulation means keeping data protected inside a class and allowing access to it through methods
//Private Encapsulation- Private properties use # and cannot be accessed directly from outside
/*
Public     → Anyone can access
Private    → Only the same class
Protected  → Class + child class (convention in JS)
 */

class Student {
  #marks = 90;                  //# syntax is the simplest way to create private class fields
  getMarks() {
    return this.#marks;
  }

  setMarks(marks) {
    this.#marks = marks;
  }
}

let student = new Student();
console.log(student.getMarks());        // 90
student.setMarks(95);
console.log(student.getMarks());        // 95
//console.log(student.#marks);    //SyntaxError: Private field '#marks' must be declared in an enclosing class

//Example2
class BankAccount {
  #balance = 1000;
  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

let account = new BankAccount();
account.deposit(500);
console.log(account.getBalance());                  // 1500

//Public Encapsulation- Public properties can be accessed directly from outside the class
class Employee {
  name = "Swati";
  age = 26;
  showDetails() {
    console.log(this.name);
    console.log(this.age);
  }
}

let emp = new Employee();
console.log(emp.name);              // Swati
console.log(emp.age);               // 26

//Protected Encapsulation- we use _ to indicate a property intended for the class and its child classes
class Student {
  _marks = 90;
  showMarks() {
    console.log(this._marks);
  }
}

class Result extends Student {
  showResult() {
    console.log("Student marks:", this._marks);
  }
}

let result = new Result();
result.showResult();                    // Student marks: 90


class Student {
    static schoolName = "ABC School";
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    static getSchoolName() {
        return Student.schoolName;
    }
    display() {
        console.log("Name:", this.name);
        console.log("Age:", this.age);
    }
}
const s1 = new Student("Swati", 20);
s1.display();
// Accessing static property
console.log(Student.schoolName);

// Calling static method
console.log(Student.getSchoolName());
/*Name: Swati
Age: 20
ABC School
ABC School */