import { add, sub, mul, div } from "./Calculator.js";

console.log(add(10, 5));                //15
console.log(sub(10, 5));                //5
console.log(mul(10, 5));                //50
console.log(div(10, 5));                //2


import { name, age } from "./User.js";
console.log(name);                  //Swati
console.log(age);                   //25


import User2 from "../User2.js";
const user2 = new User2("Candy", 25);   
user2.display();       
/*Candy
25 */     