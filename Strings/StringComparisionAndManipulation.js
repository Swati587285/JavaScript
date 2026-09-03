//Using === , is case-sensitive
let a = "Test";
let b = "Test";
console.log(a === b);           //true

let s = "Test";
let t = "test";
console.log(s === t);           //false


//Using localeComapre()
let x = "Test";
let y = "Test";
console.log(x.localeCompare(y));        //0  means strings are equal

let x1 = "Hii";
let y1 = "Bye";
console.log("Bye".localeCompare("Hi"));       //-1   "Bye" comes before "Hii" alphabetically.
console.log("Hi".localeCompare("Bye"));        //1     "Hii" comes after "Bye" alphabetically.

let str11 = "Hello";
let str12 = "hello";
console.log(
    str11.localeCompare(str12, undefined, { sensitivity: "base" })    //0  //"base"  ignore differences in case and accents when comparing
);                                                  //undefined locates the second argument


//Using toLowerCase()
let a0 = "HELLO";
let b0 = "hello";
console.log(a0.toLowerCase() === b0.toLowerCase());         //true


//Using toUpperCase()
let a1 = "Hello";
let b1 = "hello";
console.log(a1.toUpperCase() === b1.toUpperCase());         //true

let str1 = "Swati";
let str2 = "sWAti";
if (str1.toLowerCase() === str2.toLowerCase()) {
    console.log("Strings are same");                        //Strings are same
} else {
    console.log("Strings are different");
}


//replace() is used to replace part of a string.
let str0 = "I like pets";
console.log(str0.replace("pets", "Dogs"));          //I like Dogs

let str01 = "red red red";                        //it will replace only 1st occurance
console.log(str01.replace("red", "yellow"));     //yellow red red

let str02 = "red red red";                           //it will replace all the matched values
console.log(str02.replaceAll("red", "blue"));        //blue blue blue


//Using +
let fName = "Swati";
let lName = "Singh";
let fullName = fName + " " + lName;
console.log(fullName);          //Swati Singh


//Using +=
let str3 = "Swati";
str3 += " Singh";
console.log(str3);              //Swati Singh


//Using concat()
let firstName = "Swati";
let lastName = "Singh";
console.log(firstName.concat(" ", lastName));           //Swati Singh


//Template literals use backticks:
let Aname = "Swati";
let age = 26;
console.log(`My name is ${Aname} and My age is ${age}`);        //My name is Swati and My age is 26



//Modifying Strings
let str = "Test";
str = "a" + str.slice(1);
console.log(str);               //aest

let Sname = "SWATI";
Sname = Sname.toLowerCase();
console.log(Sname);             //swati

let Sname1 = "swati";
Sname1 = Sname1.toUpperCase();
console.log(Sname1);             //SWATI

let Sname2 = "    swati    ";
Sname2 = Sname2.trim();
console.log(Sname2);             //swati

//case sensitive try this