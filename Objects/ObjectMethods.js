let stud = {
    name: "Rose",
    age: 25,
    test: function() {
        console.log("Hii");
    }
};
stud.test();                    //Hii


//Object.keys()
let stud1 = {
    name: "Swati",
    age: 26
};
console.log(Object.keys(stud1));            //[ 'name', 'age' ]
 

//Object.values()
let stud2 = {
    name: "Swati",
    age: 26
};
console.log(Object.values(stud2));            //[ 'Swati', 26 ]
 

//Object.entries()- Returns an array containing key-value pairs
let stud3 = {
    name: "Swati",
    age: 26
};
console.log(Object.entries(stud3));         //[ [ 'name', 'Swati' ], [ 'age', 26 ] ]


//Object.assign()- it will copy the properties from one object to another
let test1 = {
    name: "Swati"
};
let test2 = {
    age: 26
};
let result = Object.assign({}, test1, test2);           
console.log(result);                            //{ name: 'Swati', age: 26 }

//Object.create()- it will create new object using another object as its prototype
let test3 = {
    stud: function() {
        console.log("Hello");
    }
};
let student = Object.create(test3);
student.stud();                     //Hello
 
//Object.fromEntries()- it converts key-value pairs into an object.
let values = [
    ["name", "Swati"],
    ["age", 26]
];
let res = Object.fromEntries(values);
console.log(res);                   //{ name: 'Swati', age: 26 }
