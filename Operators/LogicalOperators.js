let x=10;
let z=20;

console.log(x==10 && z==30);        //  AND operator - false
console.log(x==10 || z==30);        //  OR operator - true

let y=true;
console.log(!y);  //  NOT operator(it converts the current value to false/true) - false


let a=40;
console.log(a >= 18 && a <= 60);    //  true
console.log(a >= 18 || a === 16);   //  true 
console.log(true && false);         //  false
console.log(false || true);         //  true


//&& has higher priority than ||
console.log(false || true && false);            //  false
console.log("Hello" && "World");                //  World
console.log(10 > 5 && 20 < 30 || 5 === 10);     //  true

//=== it will check value + datatype
//== it will check on value 

//we will first calculate the bracket value
console.log((10 > 5) && 20 < 30);               //  true
console.log(((20 > 5) && 20 < 30) || 30 > 40);  //  true