//Using Dot notation .
let test = {
    name: "Swati",
    age: 25,
    city: "Delhi"
};
console.log(test.name);                 // Swati
console.log(test.age);                  // 25
console.log(test.city);                 // Delhi

//Bracket Notation []
let test1 = {
    name: "Swati",
    age: 25,
    city: "Delhi"
};
console.log(test1["name"]);             // Swati
console.log(test1["age"]);              // 25
console.log(test1["city"]);             // Delhi

//Static acccessing 
//Accessing an array inside object
let student = {
    name: "Coco",
    marks: [10, 5, 9]
};
console.log(student.marks);                 //[ 10, 5, 9 ]

//when property is not defined 
let person = {
    name: "Candy",
    age: 22
};
console.log(person.address);                   //undefined

//Dynamic accessing
let person1 = {
  name: "Coco",
  age: 25
};
let key = "name";
console.log(person1[key]);                      // Coco

//Nested object properties 
let Stud = {
  name: "Swati",
  address: {
    city: "delhi",
  }
};
//Using . Dot notation
console.log(Stud.address.city);             //delhi
//Using [] bracket notation
console.log(Stud["address"]["city"]);       //delhi


//Dynamic nested property access
let Stud1 = {
  name: "Abhi",
  address: {
    city: "Delhi",
  }
};
let fkey = "address";
console.log(Stud1[fkey]);           //{ city: 'Delhi' }


//Nested objects with multiple levels
let stud2 = {
  flower: "Rose",
  color: {
    fcolor: "Red",
    quantity: {
      fquan: "three",
      fquan2: 3
    }
  }
};
console.log(stud2.color.quantity.fquan);               //three
console.log(stud2.color.quantity.fquan2);               //3