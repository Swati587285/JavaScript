//Data abstraction means hiding unnecessary implementation details and showing only the essential features to the user

class Employee {
  #salary;
  constructor(name, salary) {
    this.name = name;
    this.#salary = salary;
  }
  getSalary() {
    return this.#salary;
  }
}

const emp = new Employee("Coco", 10000);
console.log(emp.name);                //Coco
console.log(emp.getSalary());         //10000

