//charAt()      -Returns the character at a specified index.
let str = "Hello";
console.log(str.charAt(3));             //l


//charCodeAt()  -Returns the Unicode value of the character at a specified index.
let str1 = "Hello";
console.log(str1.charCodeAt(0));            //72 -ascii value of 'H'


//toUpperCase()     -Converts a string to uppercase.
let str2 = "hellotest";
console.log(str2.toUpperCase());            //HELLOTEST


//toLowerCase()     -Converts a string to lowercase.
let str3 = "HelloTest";
console.log(str3.toLowerCase());            //hellotest


//indexOf()     -Returns the index of the first occurrence of a specified value.
let str4 = "HelloTest";
console.log(str4.indexOf("l"));             //2


//lastIndexOf()     -Returns the index of the last occurrence of a specified value.
let str5 = "HelloTest";
console.log(str5.lastIndexOf("l"));         //3


//substring()   -Extracts characters between two indexes.
let str6 = "HelloTest";
console.log(str6.substring(0, 4));      //Hell


//slice()   -Extracts a portion of a string.
let str7 = "HelloTest";
console.log(str7.slice(5, 7));          //Te

let str07 = "HelloTest";                //supports -ve indexes
console.log(str07.slice(-5));           //oTest


//substr()  -Extracts a specified number of characters starting from a particular index.
let str8 = "HelloTest";
console.log(str8.substr(5, 4));         //Test


//split()       -Converts a string into an array based on a separator.
let str9 = "Red,Yellow,Green";
console.log(str9.split(","));           //[ 'Red', 'Yellow', 'Green' ]


//trim()        -Removes whitespace from both the beginning and end of a string.
let str0 = "   Hi Swati   ";            //Hi Swati
console.log(str0.trim());


//trimStart()       -Removes whitespace from the beginning of a string.
let str10 = "   Hi Swati   ";
console.log(str10.trimStart());         //Hi Swati   


//trimEnd()     -Removes whitespace from the end of a string.
let str11 = "   Hi Swati   ";
console.log(str11.trimEnd());           //     Hi Swati

//Practice Questions
let str01 = "  Hello There  ";
console.log(str01.trim().toUpperCase());            //HELLO THERE


let str02 = "Hello There";
console.log(str02.charAt(6));
console.log(str02.indexOf("e"));                    //T  //1

let str03 = "Hi This is an example of Slice method";
console.log(str03.slice(3, 8));                     //This 
console.log(str03.substring(8,-10 ));                 //This 
