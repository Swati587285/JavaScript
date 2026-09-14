//a callback is a function passed to another function so it can be called later

function stud(name, callback) {
  console.log("Hello, " + name);                    //Hello, Swati
  callback();
}
function role() {
  console.log(" TESTER ");                          //TESTER
}
stud("Swati", role);

//Example2
function calculate(a, b, result) {
  return result(a, b);
}
function sum(x, y) {
  return x + y;
}
console.log(calculate(5, 3, sum));                          // 8

//Example3
function calculate(a, b, result) {
  return result(a, b);
}
function sub(x, y) {
  return x - y;
}
function mul(x, y) {
  return x * y;
}
console.log(calculate(5, 3, sub));                      //2
console.log(calculate(5, 3, mul));                      //15


//Callback hell -callbacks are nested inside callback
function func1(callback) {
    console.log('Step1');
    callback();
}
function func2(callback) {
    console.log('Step2');
    callback();
}
function func3() {
    console.log('Step3');
}
func1(function () {                 // Callback Hell
    func2(function () {
        func3();
    });
});



function sum1(num, callback) {
    console.log(num);
    callback(num * 2);
}
function sum2(num, callback) {
    console.log(num);
    callback(num + 5);
}
function finish(num, callback) {
    console.log(num);
    callback();
}
// Callback chaining
sum1(10, (num) => {
    sum2(num, (num) => {
        finish(num, () => {
            console.log("Done");
        });
    });
});