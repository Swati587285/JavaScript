//A Set is a collection of unique values, it automatically removes duplicates
//Empty set
const number = new Set();
console.log(number);               //Set(0) {}

//Set with values
const numbers1 = new Set([10, 20, 30, 20, 10]);
console.log(numbers1);          //Set(3) { 10, 20, 30 }

//Create a Set from a string
const Name = new Set("Swati");
console.log(Name);               //Set(5) { 'S', 'w', 'a', 't', 'i' }

//Create a Set from another Set
const set1 = new Set([10, 20, 30]);
const set2 = new Set(set1);
console.log(set2);              //Set(3) { 10, 20, 30 }

//Set with different data types
const test = new Set([
  10,
  "Hello",
  true
]);
console.log(test);                      //Set(3) { 10, 'Hello', true }

//Methods of Sets - Add()
const numbers = new Set();
numbers.add(10);
numbers.add(20);
numbers.add(30);
console.log(numbers);                   //Set(3) { 10, 20, 30 }

//has()-checks whether a value exists
const numbers0 = new Set([10, 20, 30]);
console.log(numbers0.has(20));                  // true
console.log(numbers0.has(50));                  //false

//delete()- removes a value
const num = new Set([10, 20, 30]);
num.delete(20);
console.log(num);                               //Set(2) { 10, 30 }

//clear()- removes all values
const numb = new Set([10, 20, 30]);
numb.clear();
console.log(numb);                              //Set(0) {}

//size-returns total number of values in the Set
const num1 = new Set([10, 20, 30]);
console.log(num1.size);                         //3

//A Map stores data as key-value pairs
//Empty map 
const map = new Map();
console.log(map);

//Map with initial key-value pairs
const person = new Map([
  ["name", "Swati"],
  ["age", 25],
]);
console.log(person);                //Map(2) { 'name' => 'Swati', 'age' => 25 }

//Map with numbers as keys
const numbers9 = new Map([
  [1, "One"],
  [2, "Two"],
  [3, "Three"]
]);
console.log(numbers9.get(1));                 //One

//Map with different types of keys
const data = new Map([
  ["name", "Swati"],
  [1, "One"],
  [true, "Yes"]
]);
console.log(data.get("name"));               // Swati
console.log(data.get(1));                    // One
console.log(data.get(true));                 // Yes

//Map using objects as keys
const user1 = { name: "Swati" };
const user2 = { name: "COco" };
const users = new Map();
users.set(user1, "Ritu");
users.set(user2, "Candy");

console.log(users.get(user1));                  // Ritu
console.log(users.get(user2));                  // Candy

//Set()- add a new key-value pair or updates an existing key and Get()- returns the value associated with a key
const test1 = new Map([
  ["name", "Swati"],
  ["age", 25]
]);
console.log(test1.get("age"));                                      //25

test1.set("age", 30);
console.log(test1.get("age"));                                      // 30

console.log(test1.get("name"));                                      // Swati
console.log(test1.get("age"));                                       // 30

//has() - checks whether a key exists
const test2 = new Map([
  ["name", "Swati"],
  ["age", 25]
]);
console.log(test2.has("name"));                             // true
console.log(test2.has("city"));                             // false

//delete() - removes a key-value pair
const test3 = new Map([
  ["name", "Swati"],
  ["age", 25],
  ["city", "Delhi"]
]);
test3.delete("city");
console.log(test3);                             //Map(2) { 'name' => 'Swati', 'age' => 25 }

//clear()- removes all entries
const map1 = new Map([
  ["name", "Swati"],
  ["age", 25]
]);
map1.clear();
console.log(map1);                            //Map(0) {}

//size-  returns to tal number of key-value pairs are in the Map
const map2 = new Map([
  ["name", "Swati"],
  ["age", 25]
]);
console.log(map2.size);                         // 2
