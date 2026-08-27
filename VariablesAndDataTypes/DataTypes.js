//String
let city="delhi";
let Fname="Ritu";
let Lname="Singh";
let FullName=`${Fname} ${Lname}`; 
console.log(Fname);     //  Ritu
console.log(Lname);     //  Singh
console.log(FullName);  //  Ritu Singh  
console.log(city);      //  delhi
console.log(typeof Fname);  //  string

//Number
let a=20;
let b=11.32;
let c=-10;
console.log(a);     //  20
console.log(b);     //  11.32
console.log(c);     //  10
console.log(typeof a);  //  number

//Boolean
let isYes = true;
let isNo = false;
console.log(isYes);             //  true
console.log(isNo);              //  false
console.log(!isYes);            //  false
console.log(typeof isYes);      //boolean

//Null
let test = null;                        //Null means No value
console.log(test);                      //    null
console.log(typeof test);               //    Object

//BigInt
let Bnumber = 123456789012345678901234567890n;
console.log(Bnumber);                   //  123456789012345678901234567890n
console.log(typeof Bnumber);            //bigint

//Undefined
let Demo;                               // variable is declared but value is not assigned yet 
console.log(Demo);                      //    undefined
console.log(typeof Demo);               //    "undefined"

//Date
let date = new Date();
console.log(date);                      // it will print today's date with timestamp - 2026-08-19T04:51:14.416Z
let date0 = new Date("2026-08-20");
console.log(date0);                     //  it will print the exact given date value - 2026-08-20T00:00:00.000Z

let date2 = new Date(2026, 6, 25);
console.log(date2);                     //  Date follows zero-based month numbering. for ex: if month 6 i.e June is mentioned , it means it will display 7 i.e July

let date1 = new Date();                 //  Print current date
console.log(date1.getFullYear());       //  Year - 2026
console.log(date1.getMonth());          //  Month (0-11) - 7
console.log(date1.getDate());           //  Day of month (1-31) - 19
console.log(date1.getDay());            //  Day of week (0-6) - 3
console.log(date1.getHours());          //  Hours - 10
console.log(date1.getMinutes());        //  Minutes - 29
console.log(date1.getSeconds());        //  Seconds - 20



//  getDate() → gets the current day of the month
//  setDate() → sets the day of the month
//  setDate() is a JavaScript Date method used to change the day of the month for a date
let date4 = new Date("2026-08-20");
date4.setDate(date4.getDate() - 5);     //  returns 15-08-2026
date4.setDate(date4.getDate() + 2);     //  returns 22-08-2026
console.log(date4);

let month = new Date("2026-08-20");
month.setMonth(month.getMonth() - 1);       //  returns 20-07-2026
month.setMonth(month.getMonth() + 2);     //  returns 20-10-2026
console.log(month);


const date6 = new Date();
console.log(date6.toString());                  //Thu Aug 20 2026 12:52:49 GMT+0530 (India Standard Time)   -  date + time + timezone
console.log(date6.toDateString());              //Thu Aug 20 2026 -  only date
console.log(date6.toISOString());               //2026-08-20T07:22:49.678Z   -  ISO converts to UTC time zone
console.log(date6.toLocaleDateString());        //20/8/2026      -      local date
console.log(date6.toLocaleString());            //20/8/2026, 12:52:49 pm   -  local date + time 

      
                        