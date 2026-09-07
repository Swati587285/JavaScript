let student0 = {
    name: "swati",
    age: 25
};
console.log(student0);               //{ name: 'swati', age: 25 }

//creating an Empty Object
let student1 = {};
student1.name = "Swatiii";
student1.age = 25;
console.log(student1);              //{ name: 'Swatiii', age: 25 }

//Using new Object()
let student2 = new Object();
student2.name = "Coco";
student2.age = 26;
console.log(student2);              //{ name: 'Coco', age: 26 }


//Using Object.create
let stud = {
  test() {
    console.log("Hii");
  }
};
let stud0 = Object.create(stud);
stud0.name = "Abhi";
console.log(stud0.name);                    // Abhi
stud0.test();                              // Hii


//creating object with different data types
let student3 = {
    name: "Rahul",
    age: 21,
    isStudent: true,
    marks: [80, 90, 85]
};
console.log(student3);                  //{ name: 'Rahul', age: 21, isStudent: true, marks: [ 80, 90, 85 ] }

//object can contain functions
let student4 = {
    name: "Candy",
    age: 25,
    test: function() {
        console.log("Hello");
    }
};
student4.test();                        //Hello
console.log(student4.name);             //Candy
console.log(student4.age);              //25

// Nested objects
let student5 = {
    name: "Oreo",
    age: 25,
    address: {
        city: "Delhi",
    }
};                        
console.log(student5.name);             //Oreo
console.log(student5.age);              //25
console.log(student5.address);          //{ city: 'Delhi' }
console.log(student5.address.city);     //Delhi

//Adding, Changing and Deleting Properties- Add
let test1 = {
    name: "Ritu"
};
test1.age = 25;
console.log(test1);         //{ name: 'Ritu', age: 25 }

//change
let test2 = {
    name: "Ritu"
};
test2.name ="Abhi";
console.log(test2);         //{ name: 'Abhi' }

//delete
let test3 = {
    name: "Ritu",
    age: 25
};
delete test3.age;
console.log(test3);         //{ name: 'Ritu' }


//Creating Multiple Objects
let stud1 = {
    name: "Coco",
    age: 20
};
let stud2 = {
    name: "Candy",
    age: 22
};
console.log(stud1);     //{ name: 'Coco', age: 20 }
console.log(stud2);     //{ name: 'Candy', age: 22 }

