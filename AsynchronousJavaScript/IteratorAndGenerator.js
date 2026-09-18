//An iterator is an object that gives you values one at a time
//An iterator has a next() method.

const numbers = [5, 10, 15];
const iterator = numbers[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

/*{ value: 5, done: false }
{ value: 10, done: false }
{ value: 15, done: false }
{ value: undefined, done: true }
 */

//Example2- calling iterator manually
const numbers = [10, 20, 30];
const iterator1 = numbers[Symbol.iterator]();
console.log(iterator1.next().value);                // 10
console.log(iterator1.next().value);                // 20
console.log(iterator1.next().value);                // 30
console.log(iterator1.next().done);                // true

//String Iterator
const Aname = "Swati";
const iter = Aname[Symbol.iterator]();
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

/* { value: 'S', done: false }
{ value: 'w', done: false }
{ value: 'a', done: false }*/

//Set Iterator
const numbers = new Set([10, 20, 30]);
const iterator2 = numbers.values();
console.log(iterator2.next());
console.log(iterator2.next());
console.log(iterator2.next());
console.log(iterator2.next());

/*{ value: 10, done: false }
{ value: 20, done: false }
{ value: 30, done: false }
{ value: undefined, done: true } */

//Map Iterator
const person = new Map([
  ["name", "Swati"],
  ["age", 25]
]);
const iterator3 = person.entries();
console.log(iterator3.next());
console.log(iterator3.next());
console.log(iterator3.next());

/*{ value: [ 'name', 'Swati' ], done: false }
{ value: [ 'age', 25 ], done: false }
{ value: undefined, done: true } */


//A generator is a special type of function that can pause its execution and continue later
function* numbers() {
  yield 10;
  yield 20;
  yield 30;
}
const generator = numbers();
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next().value);            //undefined
console.log(generator.next().done);             //true
/*{ value: 10, done: false }
{ value: 20, done: false }
{ value: 30, done: false }
{ value: undefined, done: true } */

/*All generators are iterator but all iterators are not generators */

//dummy data generation using generator for automation
function* loginDataGenerator() {
  yield {
    username: 'validUser',
    password: 'Valid@123',
    expected: 'success'
  };

  yield {
    username: 'invalidUser',
    password: 'Valid@123',
    expected: 'failure'
  };

  yield {
    username: 'validUser',
    password: 'wrongPassword',
    expected: 'failure'
  };

  yield {
    username: '',
    password: '',
    expected: 'validation error'
  };
}

const loginData = loginDataGenerator();
for (const data of loginData) {
  console.log(data);
}

//Example2
function* registrationGenerator() {
  let counter = 1;

  while (true) {
    yield {
      firstName: `Test${counter}`,
      lastName: `User${counter}`,
      email: `test${counter}@example.com`,
      password: `Test@${counter}123`,
      confirmPassword: `Test@${counter}123`
    };

    counter++;
  }
}

const data = registrationGenerator();

console.log(data.next().value);
console.log(data.next().value);
