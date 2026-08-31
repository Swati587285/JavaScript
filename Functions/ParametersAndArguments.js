//Function Parameters and Arguments
/*Parameters are variables which we defined when creating a function.
Arguments are the actual values which we passed when calling the function. */
function Student(name) {            // name is parameter
    console.log("Hello " + name);   // it will print- Hello Coco
}
Student("Coco");            // here we are passing argument to the function i.e Coco 


function add(val1, val2) {
    console.log(val1 + val2);           
}
add(10, 20);                // 30