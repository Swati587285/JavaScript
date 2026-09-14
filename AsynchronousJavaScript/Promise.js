let checkEven = new Promise((accept, reject) => {           //creates the promise
    let number = 4;
    if (number % 2 === 0) {
        accept("The number is even!");              //The number is even!
    }
    else{
        reject("The number is odd!");
    } 
});
checkEven
    .then((message) =>{
        console.log(message);                // On success- handles the successful result
    }) 
    .catch((error) =>{
        console.error(error);               // On failure- handles the error/failure
    } ); 


//Example2
let checkOdd = new Promise((resolve, reject) => {
    let number = 5;
    if (number % 2 === 0) {
        accept("The number is even!");              
    }
    else{
        reject("The number is odd!");               //The number is odd!
    } 
});
checkOdd
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("Done!");                               //Done!
    });


//Promise Methods
let p1 = Promise.resolve("Promise 1 success");
let p2 = Promise.resolve("Promise 2 success");
let p3 = Promise.resolve("Promise 3 success");

Promise.all([p1, p2, p3])           //Promise.all() - All must succeed
    .then((result) => {
        console.log("Promise.all:", result);        //Promise.all: [ 'Promise 1 success', 'Promise 2 success', 'Promise 3 success' ]
    });

Promise.allSettled([p1, p2, p3])        //Promise.allSettled() - Wait for all
    .then((result) => {
        console.log("Promise.allSettled:", result); 
    });

/*Promise.allSettled: [
  { status: 'fulfilled', value: 'Promise 1 success' },
  { status: 'fulfilled', value: 'Promise 2 success' },
  { status: 'fulfilled', value: 'Promise 3 success' }
]*/

Promise.race([p1, p2, p3])              //Promise.race() - First one wins
    .then((result) => {
        console.log("Promise.race:", result);       //Promise.race: Promise 1 success
    });

Promise.any([p1, p2, p3])               //Promise.any() - First successful one
    .then((result) => {
        console.log("Promise.any:", result);        //Promise.any: Promise 1 success
    });


//Promise chaining
let promise = Promise.resolve(10);
promise
    .then((num) => {            //each .then() returns a new Promise, allowing you to chain another .then()
        console.log(num);       // 10
        return num * 2;
    })
    .then((num) => {
        console.log(num);       // 20
        return num + 5;
    })
    .then((num) => {
        console.log(num);       // 25
    })
    .catch((error) => {
        console.log(error);
    });
