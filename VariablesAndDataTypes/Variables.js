//var
var a=10;           //  initialization and declaration 
var a=5;            // re-declaration  
console.log(a);     //  5

//let
let b=20;
//let b=30;     We can't redeclare the value of b here.
console.log(b);     //  Error "Identifier 'b' has already been declared"

let c=10;
if (c==10)
    {
            let c=20;
            console.log(c);  // 20, re-declaration of c
    }
console.log(c);   //   10

//const
const Aname="Coco";
//const Aname="Candy";    // Error,  Identifier 'Aname' has already been declared
console.log(Aname);
