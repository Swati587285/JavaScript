//try  catch is used for handling errors

//Catching an Error
try {
  let value = x + 10;                  // x is not defined
  console.log(value);
} catch (error) {
  console.log("Error occurred: ", error.message);
}


// Throwing an error
function equal(a, b) {
  try {
    if (a != b) {
      throw new Error("Values are not equal");
    }
    return a , b;
  } catch (error) {
    console.log(error.message);         //Values are not equal
  }
}
equal(10, 5);


//Using finally -finally block always runs, whether an error occurs or not
let a = 50;
let b = 40;
try {
  if (a < b) {
    console.log("a is lesser than b");              //a is lesser than b
  } else {
    console.log("a is greater than b");
  }
} catch (error) {
  console.log("Something went wrong");
} finally {
  console.log("Value checking operation is done");          //Value checking operation is done
}


//example1
try {
    let a = v;
  if (a % 2 == 0) {
    console.log("A is even number");              
  } else {
    console.log("A is odd number");
  }
} catch (error) {
  console.log("Something went wrong");                       //Something went wrong
} finally {
  console.log("Value checking operation is done");          //Value checking operation is done
}

//example 2
let number = 10;
try {
  if (number > 0) {
    console.log("Positive number");         //Positive number
  } else if (number < 0) {
    console.log("Negative number");
  } else {
    console.log("Zero");
  }
} catch (error) {
  console.log("Error occurred");
} finally {
  console.log("Number checking completed");         //Number checking completed
}


try {
    let a = 10;
    let b = 20;
    console.log(a + b);
    console.log(c);             //ReferenceError: c is not defined
} catch (error) {
    console.log("Error:", error.message);
}


try {
    let name = null;
    console.log(name.toUpperCase());
} catch (error) {
    console.log("Type Error:", error.message);      //Type Error: Cannot read properties of null (reading 'toUpperCase')
}


try {
    let a = 30;
    let b = 0;
    if (b === 0) {
        throw new Error("Not divisible by 0");
    }
    console.log(a / b);                             // it will return infinity
} catch (error) {
    console.log("Error:", error.message);           //Error: Not divisible by 0
}